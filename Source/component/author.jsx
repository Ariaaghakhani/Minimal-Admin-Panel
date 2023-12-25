import { Avatar, Box, List, ListItem, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import avatar1 from '../public/avatar_1.jpg'
import avatar2 from '../public/avatar_2.jpg'
import avatar3 from '../public/avatar_3.jpg'
import FavoriteIcon from '@mui/icons-material/Favorite';

function author() {
    return (
        <List sx={{ pl: '0.5rem', pr: '0.5rem' }}>
            <ListItem sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', mb: 1 }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Avatar src='/avatar_1.jpg' sx={{ width: '40px', height: '40px', mr: 1 }} />
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Typography fontWeight={700} fontSize={14}>Javiyon Simon</Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <FavoriteIcon fontSize='10' sx={{ mr: 0.5 }} />
                            <Typography fontSize={14}>9.91k</Typography>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{ width: '40px', height: '40px', bgcolor: 'rgba(0,167,111,0.08)', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="24px" height="24px" viewBox="0 0 24 24"><path fill="rgb(0,167,111)" d="M22 8.162v.073c0 .86 0 1.291-.207 1.643c-.207.352-.584.561-1.336.98l-.793.44c.546-1.848.729-3.834.796-5.532l.01-.221l.002-.052c.651.226 1.017.395 1.245.711c.283.393.283.915.283 1.958m-20 0v.073c0 .86 0 1.291.207 1.643c.207.352.584.561 1.336.98l.794.44c-.547-1.848-.73-3.834-.797-5.532l-.01-.221l-.001-.052c-.652.226-1.018.395-1.246.711C2 6.597 2 7.12 2 8.162"></path><path fill="rgb(0,167,111)" fillRule="evenodd" d="M12 2c1.784 0 3.253.157 4.377.347c1.139.192 1.708.288 2.184.874c.476.586.45 1.219.4 2.485c-.172 4.349-1.11 9.78-6.211 10.26V19.5h1.43a1 1 0 0 1 .98.804l.19.946H18a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1 0-1.5h2.65l.19-.946a1 1 0 0 1 .98-.804h1.43v-3.534c-5.1-.48-6.038-5.912-6.21-10.26c-.051-1.266-.076-1.9.4-2.485c.475-.586 1.044-.682 2.183-.874A26.374 26.374 0 0 1 12 2m.952 4.199l-.098-.176C12.474 5.34 12.284 5 12 5c-.284 0-.474.34-.854 1.023l-.098.176c-.108.194-.162.29-.246.354c-.085.064-.19.088-.4.135l-.19.044c-.738.167-1.107.25-1.195.532c-.088.283.164.577.667 1.165l.13.152c.143.167.215.25.247.354c.032.104.021.215 0 .438l-.02.203c-.076.785-.114 1.178.115 1.352c.23.174.576.015 1.267-.303l.178-.082c.197-.09.295-.135.399-.135c.104 0 .202.045.399.135l.178.082c.691.319 1.037.477 1.267.303c.23-.174.191-.567.115-1.352l-.02-.203c-.021-.223-.032-.334 0-.438c.032-.103.104-.187.247-.354l.13-.152c.503-.588.755-.882.667-1.165c-.088-.282-.457-.365-1.195-.532l-.19-.044c-.21-.047-.315-.07-.4-.135c-.084-.064-.138-.16-.246-.354" clipRule="evenodd"></path></svg>
                </Box>
            </ListItem>
            <ListItem sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', mb: 1 }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Avatar src='/avatar_2.jpg' sx={{ width: '40px', height: '40px', mr: 1 }} />
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Typography fontWeight={700} fontSize={14}>Deja Brady</Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <FavoriteIcon fontSize='10' sx={{ mr: 0.5 }} />
                            <Typography fontSize={14}>9.12k</Typography>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{ width: '40px', height: '40px', bgcolor: 'rgba(0,184,217,0.08)', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="24px" height="24px" viewBox="0 0 24 24"><path fill="rgb(0, 184, 217)" d="M22 8.162v.073c0 .86 0 1.291-.207 1.643c-.207.352-.584.561-1.336.98l-.793.44c.546-1.848.729-3.834.796-5.532l.01-.221l.002-.052c.651.226 1.017.395 1.245.711c.283.393.283.915.283 1.958m-20 0v.073c0 .86 0 1.291.207 1.643c.207.352.584.561 1.336.98l.794.44c-.547-1.848-.73-3.834-.797-5.532l-.01-.221l-.001-.052c-.652.226-1.018.395-1.246.711C2 6.597 2 7.12 2 8.162"></path><path fill="rgb(0, 184, 217)" fillRule="evenodd" d="M12 2c1.784 0 3.253.157 4.377.347c1.139.192 1.708.288 2.184.874c.476.586.45 1.219.4 2.485c-.172 4.349-1.11 9.78-6.211 10.26V19.5h1.43a1 1 0 0 1 .98.804l.19.946H18a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1 0-1.5h2.65l.19-.946a1 1 0 0 1 .98-.804h1.43v-3.534c-5.1-.48-6.038-5.912-6.21-10.26c-.051-1.266-.076-1.9.4-2.485c.475-.586 1.044-.682 2.183-.874A26.374 26.374 0 0 1 12 2m.952 4.199l-.098-.176C12.474 5.34 12.284 5 12 5c-.284 0-.474.34-.854 1.023l-.098.176c-.108.194-.162.29-.246.354c-.085.064-.19.088-.4.135l-.19.044c-.738.167-1.107.25-1.195.532c-.088.283.164.577.667 1.165l.13.152c.143.167.215.25.247.354c.032.104.021.215 0 .438l-.02.203c-.076.785-.114 1.178.115 1.352c.23.174.576.015 1.267-.303l.178-.082c.197-.09.295-.135.399-.135c.104 0 .202.045.399.135l.178.082c.691.319 1.037.477 1.267.303c.23-.174.191-.567.115-1.352l-.02-.203c-.021-.223-.032-.334 0-.438c.032-.103.104-.187.247-.354l.13-.152c.503-.588.755-.882.667-1.165c-.088-.282-.457-.365-1.195-.532l-.19-.044c-.21-.047-.315-.07-.4-.135c-.084-.064-.138-.16-.246-.354" clipRule="evenodd"></path></svg>
                </Box>
            </ListItem>
            <ListItem sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Avatar src='/avatar_3.jpg' sx={{ width: '40px', height: '40px', mr: 1 }} />
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Typography fontWeight={700} fontSize={14}>Lucian Obrien</Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <FavoriteIcon fontSize='10' sx={{ mr: 0.5 }} />
                            <Typography fontSize={14}>1.95k</Typography>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{ width: '40px', height: '40px', bgcolor: 'rgba(255,86,48,0.08)', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="24px" height="24px" viewBox="0 0 24 24"><path fill="rgb(255,86,48)" d="M22 8.162v.073c0 .86 0 1.291-.207 1.643c-.207.352-.584.561-1.336.98l-.793.44c.546-1.848.729-3.834.796-5.532l.01-.221l.002-.052c.651.226 1.017.395 1.245.711c.283.393.283.915.283 1.958m-20 0v.073c0 .86 0 1.291.207 1.643c.207.352.584.561 1.336.98l.794.44c-.547-1.848-.73-3.834-.797-5.532l-.01-.221l-.001-.052c-.652.226-1.018.395-1.246.711C2 6.597 2 7.12 2 8.162"></path><path fill="rgb(255,86,48)" fillRule="evenodd" d="M12 2c1.784 0 3.253.157 4.377.347c1.139.192 1.708.288 2.184.874c.476.586.45 1.219.4 2.485c-.172 4.349-1.11 9.78-6.211 10.26V19.5h1.43a1 1 0 0 1 .98.804l.19.946H18a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1 0-1.5h2.65l.19-.946a1 1 0 0 1 .98-.804h1.43v-3.534c-5.1-.48-6.038-5.912-6.21-10.26c-.051-1.266-.076-1.9.4-2.485c.475-.586 1.044-.682 2.183-.874A26.374 26.374 0 0 1 12 2m.952 4.199l-.098-.176C12.474 5.34 12.284 5 12 5c-.284 0-.474.34-.854 1.023l-.098.176c-.108.194-.162.29-.246.354c-.085.064-.19.088-.4.135l-.19.044c-.738.167-1.107.25-1.195.532c-.088.283.164.577.667 1.165l.13.152c.143.167.215.25.247.354c.032.104.021.215 0 .438l-.02.203c-.076.785-.114 1.178.115 1.352c.23.174.576.015 1.267-.303l.178-.082c.197-.09.295-.135.399-.135c.104 0 .202.045.399.135l.178.082c.691.319 1.037.477 1.267.303c.23-.174.191-.567.115-1.352l-.02-.203c-.021-.223-.032-.334 0-.438c.032-.103.104-.187.247-.354l.13-.152c.503-.588.755-.882.667-1.165c-.088-.282-.457-.365-1.195-.532l-.19-.044c-.21-.047-.315-.07-.4-.135c-.084-.064-.138-.16-.246-.354" clipRule="evenodd"></path></svg>
                </Box>
            </ListItem>
        </List>
    )
}

export default author