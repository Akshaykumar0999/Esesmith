import './index.css'
const ShowContent = () => {
    return(
        <div className="showcontent-card">
            <div style={{width: '95%', display: 'flex', justifyContent: 'flex-start', alignContent: 'flex-start', marginBottom: '14px'}}>
                <button style={{background: '#165315', color: '#ffffff'}} className='buttons-card'>Plants</button>
                <button  className='buttons-card'>Pots</button>
            </div>
            <p style={{color: '#8d8d8d', width: '95%', fontSize: '16px', fontWeight: '400', textAlign: 'left'}}>Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum quidem aut necessitatibus enim ut internos accusantium a numquam autem ab rerum omnis. Non molestiae ratione et laborum doloribus aut molestiae voluptates ut porro excepturi sit molestiae obcaecati qui quis beatae est voluptatem eius. Et architecto nihil id labore omnis hic iste deleniti et porro aspernatur.</p>
        </div>
    )
}

export default ShowContent