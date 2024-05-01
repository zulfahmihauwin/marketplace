import Topbar from './components/topbar';
import Card from './components/card'

const index = () => {
    const listProduct = [
        {
            image: '',
            label: 'Black Winter ...',
            desc: 'Autumn Winter And Casual cotton-padded jacket ...',
            price: 'Rp 490.000'
        },
        {
            image: '',
            label: 'Black Winter ...',
            desc: 'Autumn Winter And Casual cotton-padded jacket ...',
            price: 5000
        },
        {
            image: '',
            label: 'Black Winter ...',
            desc: 'Autumn Winter And Casual cotton-padded jacket ...',
            price: 5000
        },
        {
            image: '',
            label: 'Black Winter ...',
            desc: 'Autumn Winter And Casual cotton-padded jacket ...',
            price: 5000
        }
    ]
    return (
        <>
            <Topbar />
           
            {listProduct.map ((item, index) => <Card key={String(index)} {...item} />  )}
        </>
)
};

export default index;