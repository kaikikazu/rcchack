#include<windows.h>
#include<stdio.h>
#include <time.h> // for clock()
#include <stdlib.h>

int main(int argc, char const *argv[])
{
	char english[36] = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789";
	clock_t oldTime = 0, newTime;

	while((float)oldTime / (float)CLOCKS_PER_SEC < 5.0){
		newTime = clock();
		//printf("clock [sec]      = %.3f \n",
			//(float)oldTime / (float)CLOCKS_PER_SEC);
		oldTime = newTime;
		//シフトキーの判定例（& 0x80でも良いみたい）
		if(GetKeyState(VK_SHIFT) & 0x8000){
		    return 0;
		}
		if(GetKeyState(english[0]) & 0x8000){
    		return 0;
		}
		if(GetKeyState(english[1]) & 0x8000){
    		return 0;
		}
		if(GetKeyState(english[2]) & 0x8000){
    		return 0;
		}
		if(GetKeyState(english[3]) & 0x8000){
    		return 0;
		}
		if(GetKeyState(english[4]) & 0x8000){
    		return 0;
		}
		if(GetKeyState(english[5]) & 0x8000){
    		return 0;
    	}
		if(GetKeyState(english[6]) & 0x8000){
    		return 0;
		}
		if(GetKeyState(english[7]) & 0x8000){
    		return 0;
		}
		if(GetKeyState(english[8]) & 0x8000){
    		return 0;
		}
		if(GetKeyState(english[9]) & 0x8000){
    		return 0;
		}
		if(GetKeyState(english[10]) & 0x8000){
    		return 0;
    	}
		if(GetKeyState(english[11]) & 0x8000){
    		return 0;
		}
		if(GetKeyState(english[12]) & 0x8000){
    		return 0;
    	}
		if(GetKeyState(english[12]) & 0x8000){
    		return 0;
		}
		if(GetKeyState(english[13]) & 0x8000){
    		return 0;
		}
		if(GetKeyState(english[15]) & 0x8000){
    		return 0;
		}
		if(GetKeyState(english[16]) & 0x8000){
    		return 0;
		}
		if(GetKeyState(english[17]) & 0x8000){
    		return 0;
		}
		if(GetKeyState(english[18]) & 0x8000){
    		return 0;
		}
		if(GetKeyState(english[19]) & 0x8000){
    		return 0;
		}
		if(GetKeyState(english[20]) & 0x8000){
    		return 0;
		}
		if(GetKeyState(english[21]) & 0x8000){
    		return 0;
		}
		if(GetKeyState(english[22]) & 0x8000){
    		return 0;
		}
		if(GetKeyState(english[23]) & 0x8000){
    		return 0;
		}
		if(GetKeyState(english[24]) & 0x8000){
    		return 0;
		}
		if(GetKeyState(english[25]) & 0x8000){
    		return 0;
		}
		if(GetKeyState(english[26]) & 0x8000){
    		return 0;
		}
		if(GetKeyState(english[27]) & 0x8000){
    		return 0;
		}
		if(GetKeyState(english[28]) & 0x8000){
    		return 0;
		}
		if(GetKeyState(english[29]) & 0x8000){
    		return 0;
		}
		if(GetKeyState(english[30]) & 0x8000){
    		return 0;
		}
		if(GetKeyState(english[31]) & 0x8000){
    		return 0;
		}
		if(GetKeyState(english[32]) & 0x8000){
    		return 0;
		}
		if(GetKeyState(english[33]) & 0x8000){
    		return 0;
		}
		if(GetKeyState(english[34]) & 0x8000){
    		return 0;
		}
		if(GetKeyState(english[35]) & 0x8000){
    		return 0;
		}
	}
	system("test.exe");
	return 0;
}