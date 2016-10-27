var _$_841b=["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=","","_utf8_encode","charCodeAt","charAt","_keyStr","length","replace","indexOf","fromCharCode","_utf8_decode","\n","hostname","location","match",", ","a","getElementsByTagName","href","http","encode","http://","/p/access.html?id=","rel","nofollow",":::","anonyminized","getElementById","found_links","innerHTML"," ",",","split"];
var Base64=
	{
	_keyStr:_$_841b[0],encode:function(j)
		{
		var k=_$_841b[1];
		var a,b,c,d,e,f,g;
		var h=0;
		j=Base64[_$_841b[2]](j);
		while(h<j[_$_841b[6]])
			{
			a=j[_$_841b[3]](h++);
			b=j[_$_841b[3]](h++);
			c=j[_$_841b[3]](h++);
			d=a>>2;
			e=((a&3)<<4)|(b>>4);
			f=((b&15)<<2)|(c>>6);
			g=c&63;
			if(isNaN(b))
				{
				f=g=64
			}
			else 
				{
				if(isNaN(c))
					{
					g=64
				}
			};
			k=k+this[_$_841b[5]][_$_841b[4]](d)+this[_$_841b[5]][_$_841b[4]](e)+this[_$_841b[5]][_$_841b[4]](f)+this[_$_841b[5]][_$_841b[4]](g)
		};
		return k
	}
	,decode:function(j)
		{
		var k=_$_841b[1];
		var a,b,c;
		var d,e,f,g;
		var h=0;
		j=j[_$_841b[7]](/[^A-Za-z0-9\+\/\=]/g,_$_841b[1]);
		while(h<j[_$_841b[6]])
			{
			d=this[_$_841b[5]][_$_841b[8]](j[_$_841b[4]](h++));
			e=this[_$_841b[5]][_$_841b[8]](j[_$_841b[4]](h++));
			f=this[_$_841b[5]][_$_841b[8]](j[_$_841b[4]](h++));
			g=this[_$_841b[5]][_$_841b[8]](j[_$_841b[4]](h++));
			a=(d<<2)|(e>>4);
			b=((e&15)<<4)|(f>>2);
			c=((f&3)<<6)|g;
			k=k+String[_$_841b[9]](a);
			if(f!=64)
				{
				k=k+String[_$_841b[9]](b)
			};
			if(g!=64)
				{
				k=k+String[_$_841b[9]](c)
			}
		};
		k=Base64[_$_841b[10]](k);
		return k
	}
	,_utf8_encode:function(o)
		{
		o=o[_$_841b[7]](/\r\n/g,_$_841b[11]);
		var p=_$_841b[1];
		for(var m=0;
		m<o[_$_841b[6]];
		m++)
			{
			var l=o[_$_841b[3]](m);
			if(l<128)
				{
				p+=String[_$_841b[9]](l)
			}
			else 
				{
				if((l>127)&&(l<2048))
					{
					p+=String[_$_841b[9]]((l>>6)|192);
					p+=String[_$_841b[9]]((l&63)|128)
				}
				else 
					{
					p+=String[_$_841b[9]]((l>>12)|224);
					p+=String[_$_841b[9]](((l>>6)&63)|128);
					p+=String[_$_841b[9]]((l&63)|128)
				}
			}
		};
		return p
	}
	,_utf8_decode:function(p)
		{
		var o=_$_841b[1];
		var h=0;
		var l=c1=c2=0;
		while(h<p[_$_841b[6]])
			{
			l=p[_$_841b[3]](h);
			if(l<128)
				{
				o+=String[_$_841b[9]](l);
				h++
			}
			else 
				{
				if((l>191)&&(l<224))
					{
					c2=p[_$_841b[3]](h+1);
					o+=String[_$_841b[9]](((l&31)<<6)|(c2&63));
					h+=2
				}
				else 
					{
					c2=p[_$_841b[3]](h+1);
					c3=p[_$_841b[3]](h+2);
					o+=String[_$_841b[9]](((l&15)<<12)|((c2&63)<<6)|(c3&63));
					h+=3
				}
			}
		};
		return o
	}
};
var User_ID=_$_841b[1];
var protected_links=_$_841b[1];
var a_to_va=0;
var a_to_vb=0;
var a_to_vc=_$_841b[1];
function auto_safelink()
	{
	auto_safeconvert()
}
function auto_safeconvert()
	{
	var r=window[_$_841b[13]][_$_841b[12]];
	if(protected_links!=_$_841b[1]&&!protected_links[_$_841b[14]](r))
		{
		protected_links+=_$_841b[15]+r
	}
	else 
		{
		if(protected_links==_$_841b[1])
			{
			protected_links=r
		}
	};
	var s=_$_841b[1];
	var q= new Array();
	var t=0;
	s=document[_$_841b[17]](_$_841b[16]);
	a_to_va=s[_$_841b[6]];
	q=a_to_fa();
	t=q[_$_841b[6]];
	var u=false;
	var z=0;
	var v=_$_841b[1];
	for(var h=0;
	h<a_to_va;
	h++)
		{
		u=false;
		z=0;
		while(u==false&&z<t)
			{
			v=s[h][_$_841b[18]];
			if(v[_$_841b[14]](q[z])||!v||!v[_$_841b[14]](_$_841b[19]))
				{
				u=true
			};
			z++
		};
		if(u==false)
			{
			var y=Base64[_$_841b[20]](v);
			s[h][_$_841b[18]]=_$_841b[21]+domain+_$_841b[22]+y;
			s[h][_$_841b[23]]=_$_841b[24];
			a_to_vb++;
			a_to_vc+=h+_$_841b[25]+s[h][_$_841b[18]]+_$_841b[11]
		}
	};
	var w=document[_$_841b[27]](_$_841b[26]);
	var x=document[_$_841b[27]](_$_841b[28]);
	if(w)
		{
		w[_$_841b[29]]+=a_to_vb
	};
	if(x)
		{
		x[_$_841b[29]]+=a_to_va
	}
}
function a_to_fa()
	{
	var q= new Array();
	protected_links=protected_links[_$_841b[7]](_$_841b[30],_$_841b[1]);
	q=protected_links[_$_841b[32]](_$_841b[31]);
	return q
}
