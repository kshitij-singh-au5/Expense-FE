import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import EditIcon from '@material-ui/icons/Edit';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import Grid from '@material-ui/core/Grid';
import { tabData, delData, editData } from '../ActionCreator/action';
import { connect } from 'react-redux';
import './table.css'

function Tables({ tableData, tabData, editData, count, total }) {

    useEffect(() => {
        tabData()
    }, [count])


    const deleteElem = async (id) => {
        await delData(id)
        tabData()

    }

    const editElem = (ele) => {
        editData(ele)
    }

    const useStyles = makeStyles({
        root: {
            minWidth: 275,
            display: 'flex'
        },
        bullet: {
            display: 'inline-block',
            margin: '0 2px',
            transform: 'scale(0.8)',
        },
        details: {
            display: 'flex',
            flexDirection: 'column',
        },
        content: {
            flex: '1 0 auto',
        },
        title: {
            fontSize: 14,
        },
        pos: {
            marginBottom: 12,
        },

        rupee: {
            minWidth: 400,
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center'
        },
        iconss: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end'
        },
        iconsss: {
            display: 'flex',
            alignItems: 'center'
        },
        amount: {
            fontSize: 25
        },
        total: {
            color: 'white',
            display: 'flex',
            justifyContent: 'flex-end',
            marginBottom: 40
        }

    });


    const classes = useStyles();



    return (
        <>
            <Typography className={classes.total} variant="h4">Total : {total}</Typography>
            <div className="over">
                {tableData && tableData.map((ele, index) => {
                    return (
                        <Grid container spacing={3} >
                            <Grid item xs={2} className={classes.iconss}>

                                <EditIcon fontSize="large" onClick={() => editElem(ele)}>Edit</EditIcon>
                            </Grid>
                            <Grid item xs={8}>
                                <Card className={classes.root}>
                                    <div className={classes.details}>
                                        <CardContent className={classes.content}>
                                            <Typography className={classes.title} color="textSecondary" gutterBottom>
                                                {ele.date}
                                            </Typography>
                                            <Typography variant="h5" component="h2" style={{ color: '#6404EE' }}>
                                                <b>{ele.title}</b>
                                            </Typography>
                                            <Typography className={classes.pos} color="textSecondary">
                                                <b>Note: </b>{ele.note}
                                            </Typography>

                                        </CardContent>
                                    </div>
                                    <div className={classes.rupee}>
                                        <CardContent>
                                            <Typography className={classes.amount}>
                                                <b>₹{ele.amount}</b>
                                            </Typography>
                                        </CardContent>
                                    </div>
                                </Card>
                            </Grid>
                            <Grid item xs={2} className={classes.iconsss}>

                                <HighlightOffIcon fontSize="large" onClick={() => deleteElem(ele._id)}>Delete</HighlightOffIcon>

                            </Grid>
                        </Grid>


                    )
                })}
            </div>
        </>
    )
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        tableData: state.tableData,
        count: state.count,
        total: state.total
    }
}
export default connect(mapStateToProps, { tabData, editData })(Tables)