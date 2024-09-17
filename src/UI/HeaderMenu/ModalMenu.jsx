
import styled from 'styled-components';

const ModalMenu = (props) => {

    return (
        <div onClick={props.onCloseHandler}> 
            {props.modal && (
                <ModalMenuStyled>
                    <MyAppStyle>
                        <h6>My App <button onClick={props.onCloseHandler}>x</button></h6> {/* Меняем значение modal на false */}
                    </MyAppStyle>
                    <WindowIconStyle>
                        <img src="https://www.freeiconspng.com/thumbs/windows-icon-png/description-perspective-button-windows-icon-png-22.png" alt="" />
                        <h3>Dashboard</h3>
                    </WindowIconStyle>
                    <WindowIconStyle>
                        <img src="https://cdn-icons-png.freepik.com/512/3781/3781655.png" alt="" />
                        <h3>ShortCuts</h3>
                    </WindowIconStyle>
                    <WindowIconStyle>
                        <img src="https://t3.ftcdn.net/jpg/05/56/90/20/360_F_556902040_mNrTEGg5i4S83J9C5mvYwWKDgoWXUPPe.jpg" alt="" />
                        <h3>Overview</h3>
                    </WindowIconStyle>
                    <WindowIconStyle>
                        <img src="https://static.vecteezy.com/system/resources/thumbnails/021/957/793/small/event-outline-icons-simple-stock-illustration-stock-vector.jpg" alt="" />
                        <h3>Events</h3>
                    </WindowIconStyle>
                    <WindowIconStyle>
                        <img src="https://www.shareicon.net/download/2016/06/18/596237_help.ico" alt="" />
                        <h3>About</h3>
                    </WindowIconStyle>
                </ModalMenuStyled>
            )}
        </div>
    );
};

export default ModalMenu;

const ModalMenuStyled = styled.div`
    height: 400px;
    width: 300px;
    background-color: #666463;
    position: absolute;
    z-index: 999;
    border-radius: 10px;
`

const WindowIconStyle = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: white;

    img {
        width: 20px;
        height: 20px;
    }

    h3 {
        display: flex;
        justify-content: space-around;
    }
`;

const MyAppStyle = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-left: 90px;
    color: white;

    button {
        margin-left: 80px;
    }
`;
