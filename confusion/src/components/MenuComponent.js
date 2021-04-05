import {Card, CardImg, CardImgOverlay,  CardTitle, Breadcrumb, BreadcrumbItem} from 'reactstrap'
import {Link} from 'react-router-dom'

function RenderMenuItem({dish,onClick}){
    return(
        <Card>
            <Link to= {`/menu/${dish.id}`}>
                <CardImg width="100%" src={dish.image} alt={dish.name}/>
                <CardImgOverlay >
                    <CardTitle heading className="bold">{dish.name}</CardTitle>
                </CardImgOverlay>
            </Link>
        </Card>
    );
}

const Menu = (props) =>{
    const menu = props.dishes.map((dish)=>{
        return (
            <div key={dish.id} className="col-12 col-md-5 m-1">
                <RenderMenuItem dish = {dish} />
            </div>
        );
    });

    return(
        <div className="container" style={{textAlign: 'left'}}>
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem>
                        <Link to="/home">Home</Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                        <Link active >Menu</Link>
                    </BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h2>Menu</h2>
                    <hr/>
                </div>
            </div>
            <div className="row">
                {menu}
            </div>     
              
        </div>
    );

}

export default Menu