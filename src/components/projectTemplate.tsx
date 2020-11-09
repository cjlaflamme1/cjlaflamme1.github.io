import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import AccordionActions from '@material-ui/core/AccordionActions';
import Button from '@material-ui/core/Button';


type portfolioProps = {
    data: {
        title: string,
        image: string,
        description: string,
        projectLink: string,
        projectRepo: string
    }
}
const Accordion = withStyles({
    root: {
        border: '1px solid rgba(0, 0, 0, .125)',
        boxShadow: 'none',
        '&:not(:last-child)': {
            borderBottom: 0,
        },
        '&:before': {
            display: 'none',

        },
        '&$expanded': {
            margin: 'auto',
        },
    },
    expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
    root: {
        backgroundColor: 'rgba(0, 0, 0, .03)',
        borderBottom: '1px solid rgba(0, 0, 0, .125)',
        marginBottom: -1,
        minHeight: 56,
        '&$expanded': {
            minHeight: 56,
        },
    },
    content: {
        '&$expanded': {
            margin: '12px 0',
        },
    },
    expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiAccordionDetails);

export default function ProjectTemplate(props: portfolioProps) {
    const [expanded, setExpanded] = React.useState<string | false>(false);

    const handleChange = (panel: string) => (event: React.ChangeEvent<{}>, newExpanded: boolean) => {
        setExpanded(newExpanded ? panel : false);
    };




    return (

        <Accordion square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
            <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                <Typography>{props.data.title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <img src={props.data.image} alt="project image" className="projectImage" />

            </AccordionDetails>

            <AccordionDetails>


                <Typography>
                    {props.data.description}
                </Typography>
            </AccordionDetails>
            <AccordionActions>
                {props.data.projectLink &&
                    <Button size="small" href={props.data.projectLink} target="_blank">View Project</Button>
                }
                <Button size="small" color="primary">
                    View Repository
          </Button>
            </AccordionActions>
        </Accordion>


    );
}
