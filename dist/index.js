parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"oqNR":[function(require,module,exports) {
"use strict";var a;function t(a,t){return a.b===t.b&&a.a===t.a}function i(a,t){return a.b<t.b||a.b===t.b&&a.a<=t.a}function e(a,t,i){var e=t.b-a.b,b=i.b-t.b;return 0<e+b?e<b?t.a-a.a+e/(e+b)*(a.a-i.a):t.a-i.a+b/(e+b)*(i.a-a.a):0}function b(a,t,i){var e=t.b-a.b,b=i.b-t.b;return 0<e+b?(t.a-i.a)*e+(t.a-a.a)*b:0}function n(a,t){return a.a<t.a||a.a===t.a&&a.b<=t.b}function r(a,t,i){var e=t.a-a.a,b=i.a-t.a;return 0<e+b?e<b?t.b-a.b+e/(e+b)*(a.b-i.b):t.b-i.b+b/(e+b)*(i.b-a.b):0}function s(a,t,i){var e=t.a-a.a,b=i.a-t.a;return 0<e+b?(t.b-i.b)*e+(t.b-a.b)*b:0}function c(a){return i(a.b.a,a.a)}function h(a){return i(a.a,a.b.a)}function u(a,t,i,e){return(a=0>a?0:a)<=(i=0>i?0:i)?0===i?(t+e)/2:t+a/(a+i)*(e-t):e+i/(a+i)*(t-e)}function f(a){var t=v(a.b);return S(t,a.c),S(t.b,a.c),G(t,a.a),t}function o(a,t){var i=!1,e=!1;a!==t&&(t.a!==a.a&&(e=!0,p(t.a,a.a)),t.d!==a.d&&(i=!0,g(t.d,a.d)),E(t,a),e||(S(t,a.a),a.a.c=a),i||(G(t,a.d),a.d.a=a))}function l(a){var t=a.b,i=!1;a.d!==a.b.d&&(i=!0,g(a.d,a.b.d)),a.c===a?p(a.a,null):(a.b.d.a=J(a),a.a.c=a.c,E(a,J(a)),i||G(a,a.d)),t.c===t?(p(t.a,null),g(t.d,null)):(a.d.a=J(t),t.a.c=t.c,E(t,J(t))),T(a)}function d(a){var t=v(a),i=t.b;return E(t,a.e),t.a=a.b.a,S(i,t.a),t.d=i.d=a.d,t=t.b,E(a.b,J(a.b)),E(a.b,t),a.b.a=t.a,t.b.a.c=t.b,t.b.d=a.b.d,t.f=a.f,t.b.f=a.b.f,t}function _(a,t){var i=!1,e=v(a),b=e.b;return t.d!==a.d&&(i=!0,g(t.d,a.d)),E(e,a.e),E(b,t),e.a=a.b.a,b.a=t.a,e.d=b.d=a.d,a.d.a=b,i||G(e,a.d),e}function v(a){var t=new Z,i=new Z,e=a.b.h;return i.h=e,e.b.h=t,t.h=a,a.b.h=i,t.b=i,t.c=t,t.e=i,i.b=t,i.c=i,i.e=t}function E(a,t){var i=a.c,e=t.c;i.b.e=t,e.b.e=a,a.c=e,t.c=i}function S(a,t){var i=t.f,e=new aa(t,i);i.e=e,t.f=e,i=e.c=a;do{i.a=e,i=i.c}while(i!==a)}function G(a,t){var i=t.d,e=new Q(t,i);i.b=e,t.d=e,e.a=a,e.c=t.c,i=a;do{i.d=e,i=i.e}while(i!==a)}function T(a){var t=a.h;a=a.b.h,t.b.h=a,a.b.h=t}function p(a,t){var i=a.c,e=i;do{e.a=t,e=e.c}while(e!==i);i=a.f,(e=a.e).f=i,i.e=e}function g(a,t){var i=a.a,e=i;do{e.d=t,e=e.e}while(e!==i);i=a.d,(e=a.b).d=i,i.b=e}function L(a){var t=0;return Math.abs(a[1])>Math.abs(a[0])&&(t=1),Math.abs(a[2])>Math.abs(a[t])&&(t=2),t}var N=4e150;function w(a,t){a.f+=t.f,a.b.f+=t.b.f}function I(a,t,n){return a=a.a,t=t.a,n=n.a,t.b.a===a?n.b.a===a?i(t.a,n.a)?0>=b(n.b.a,t.a,n.a):0<=b(t.b.a,n.a,t.a):0>=b(n.b.a,a,n.a):n.b.a===a?0<=b(t.b.a,a,t.a):(t=e(t.b.a,a,t.a))>=(a=e(n.b.a,a,n.a))}function U(a){a.a.i=null;var t=a.e;t.a.c=t.c,t.c.a=t.a,a.e=null}function y(a,t){l(a.a),a.c=!1,a.a=t,t.i=a}function A(a){var t=a.a.a;do{a=da(a)}while(a.a.a===t);return a.c&&(y(a,t=_(la(a).a.b,a.a.e)),a=da(a)),a}function k(a,t,i){var e=new oa;return e.a=i,e.e=Y(a.f,t.e,e),i.i=e}function O(a,t){switch(a.s){case 100130:return 0!=(1&t);case 100131:return 0!==t;case 100132:return 0<t;case 100133:return 0>t;case 100134:return 2<=t||-2>=t}return!1}function D(a){var t=a.a,i=t.d;i.c=a.d,i.a=t,U(a)}function R(a,t,i){for(a=t,t=t.a;a!==i;){a.c=!1;var e=la(a),b=e.a;if(b.a!==t.a){if(!e.c){D(a);break}y(e,b=_(t.c.b,b.b))}t.c!==b&&(o(J(b),b),o(t,b)),D(a),t=e.a,a=e}return t}function M(a,t,i,e,b,n){var r=!0;do{k(a,t,i.b),i=i.c}while(i!==e);for(null===b&&(b=la(t).a.b.c);(i=(e=la(t)).a.b).a===b.a;)i.c!==b&&(o(J(i),i),o(J(b),i)),e.f=t.f-i.f,e.d=O(a,e.f),t.b=!0,!r&&P(a,t)&&(w(i,b),U(t),l(b)),r=!1,t=e,b=i;t.b=!0,n&&j(a,t)}function B(a,t,i,e,b){var n=[t.g[0],t.g[1],t.g[2]];t.d=null,t.d=a.o&&a.o(n,i,e,a.c)||null,null===t.d&&(b?a.n||(K(a,100156),a.n=!0):t.d=i[0])}function C(a,t,i){var e=[null,null,null,null];e[0]=t.a.d,e[1]=i.a.d,B(a,t.a,e,[.5,.5,0,0],!1),o(t,i)}function m(a,t,i,e,b){var n=Math.abs(t.b-a.b)+Math.abs(t.a-a.a),r=Math.abs(i.b-a.b)+Math.abs(i.a-a.a),s=b+1;e[b]=.5*r/(n+r),e[s]=.5*n/(n+r),a.g[0]+=e[b]*t.g[0]+e[s]*i.g[0],a.g[1]+=e[b]*t.g[1]+e[s]*i.g[1],a.g[2]+=e[b]*t.g[2]+e[s]*i.g[2]}function P(a,e){var n=la(e),r=e.a,s=n.a;if(i(r.a,s.a)){if(0<b(s.b.a,r.a,s.a))return!1;if(t(r.a,s.a)){if(r.a!==s.a){n=a.e;var c=r.a.h;if(0<=c){var h=(n=n.b).d,u=n.e,f=n.c,l=f[c];h[l]=h[n.a],f[h[l]]=l,l<=--n.a&&(1>=l?ua(n,l):i(u[h[l>>1]],u[h[l]])?ua(n,l):fa(n,l)),u[c]=null,f[c]=n.b,n.b=c}else for(n.c[-(c+1)]=null;0<n.a&&null===n.c[n.d[n.a-1]];)--n.a;C(a,J(s),r)}}else d(s.b),o(r,J(s)),e.b=n.b=!0}else{if(0>b(r.b.a,s.a,r.a))return!1;da(e).b=e.b=!0,d(r.b),o(J(s),r)}return!0}function V(a,c){var h=la(c),f=c.a,l=h.a,_=f.a,v=l.a,E=f.b.a,S=l.b.a,G=new aa;if(b(E,a.a,_),b(S,a.a,v),_===v||Math.min(_.a,E.a)>Math.max(v.a,S.a))return!1;if(i(_,v)){if(0<b(S,_,v))return!1}else if(0>b(E,v,_))return!1;var T,p,g=E,L=_,N=S,w=v;if(i(g,L)||(T=g,g=L,L=T),i(N,w)||(T=N,N=w,w=T),i(g,N)||(T=g,g=N,N=T,T=L,L=w,w=T),i(N,L)?i(L,w)?(0>(T=e(g,N,L))+(p=e(N,L,w))&&(T=-T,p=-p),G.b=u(T,N.b,p,L.b)):(0>(T=b(g,N,L))+(p=-b(g,w,L))&&(T=-T,p=-p),G.b=u(T,N.b,p,w.b)):G.b=(N.b+L.b)/2,n(g,L)||(T=g,g=L,L=T),n(N,w)||(T=N,N=w,w=T),n(g,N)||(T=g,g=N,N=T,T=L,L=w,w=T),n(N,L)?n(L,w)?(0>(T=r(g,N,L))+(p=r(N,L,w))&&(T=-T,p=-p),G.a=u(T,N.a,p,L.a)):(0>(T=s(g,N,L))+(p=-s(g,w,L))&&(T=-T,p=-p),G.a=u(T,N.a,p,w.a)):G.a=(N.a+L.a)/2,i(G,a.a)&&(G.b=a.a.b,G.a=a.a.a),g=i(_,v)?_:v,i(g,G)&&(G.b=g.b,G.a=g.a),t(G,_)||t(G,v))return P(a,c),!1;if(!t(E,a.a)&&0<=b(E,a.a,G)||!t(S,a.a)&&0>=b(S,a.a,G)){if(S===a.a)return d(f.b),o(l.b,f),f=la(c=A(c)).a,R(a,la(c),h),M(a,c,J(f),f,f,!0),!0;if(E===a.a){d(l.b),o(f.e,J(l)),v=(_=h=c).a.b.a;do{_=da(_)}while(_.a.b.a===v);return _=la(c=_).a.b.c,h.a=J(l),M(a,c,(l=R(a,h,null)).c,f.b.c,_,!0),!0}return 0<=b(E,a.a,G)&&(da(c).b=c.b=!0,d(f.b),f.a.b=a.a.b,f.a.a=a.a.a),0>=b(S,a.a,G)&&(c.b=h.b=!0,d(l.b),l.a.b=a.a.b,l.a.a=a.a.a),!1}return d(f.b),d(l.b),o(J(l),f),f.a.b=G.b,f.a.a=G.a,f.a.h=ea(a.e,f.a),f=f.a,l=[0,0,0,0],G=[_.d,E.d,v.d,S.d],f.g[0]=f.g[1]=f.g[2]=0,m(f,_,E,l,0),m(f,v,S,l,2),B(a,f,G,l,!0),da(c).b=c.b=h.b=!0,!1}function j(a,t){for(var e=la(t);;){for(;e.b;)t=e,e=la(e);if(!t.b&&(e=t,null===(t=da(t))||!t.b))break;t.b=!1;var n,r=t.a,s=e.a;if(n=r.b.a!==s.b.a)a:{var c=la(n=t),h=n.a,u=c.a,f=void 0;if(i(h.b.a,u.b.a)){if(0>b(h.b.a,u.b.a,h.a)){n=!1;break a}da(n).b=n.b=!0,f=d(h),o(u.b,f),f.d.c=n.d}else{if(0<b(u.b.a,h.b.a,u.a)){n=!1;break a}n.b=c.b=!0,f=d(u),o(h.e,u.b),f.b.d.c=n.d}n=!0}if(n&&(e.c?(U(e),l(s),s=(e=la(t)).a):t.c&&(U(t),l(r),r=(t=da(e)).a)),r.a!==s.a)if(r.b.a===s.b.a||t.c||e.c||r.b.a!==a.a&&s.b.a!==a.a)P(a,t);else if(V(a,t))break;r.a===s.a&&r.b.a===s.b.a&&(w(s,r),U(t),l(r),t=da(e))}}function W(a,e){a.a=e;for(var n=e.c;null===n.i;)if((n=n.c)===e.c){n=a;var r=e;(h=new oa).a=r.c.b;var s=(f=n.f).a;do{s=s.a}while(null!==s.b&&!f.c(f.b,h,s.b));var c=la(f=s.b),h=f.a;s=c.a;if(0===b(h.b.a,r,h.a))t((h=f.a).a,r)||t(h.b.a,r)||(d(h.b),f.c&&(l(h.c),f.c=!1),o(r.c,h),W(n,r));else{var u=i(s.b.a,h.b.a)?f:c;c=void 0;f.d||u.c?(c=u===f?_(r.c.b,h.e):_(s.b.c.b,r.c).b,u.c?y(u,c):(h=n,(f=k(n,f,c)).f=da(f).f+f.a.f,f.d=O(h,f.f)),W(n,r)):M(n,f,r.c,r.c,null,!0)}return}if(f=(h=la(n=A(n.i))).a,(h=R(a,h,null)).c===f){h=(f=h).c,s=la(n),c=n.a,u=s.a;var f,v=!1;c.b.a!==u.b.a&&V(a,n),t(c.a,a.a)&&(o(J(h),c),h=la(n=A(n)).a,R(a,la(n),s),v=!0),t(u.a,a.a)&&(o(f,J(u)),f=R(a,s,null),v=!0),v?M(a,n,f.c,h,h,!0):(r=i(u.a,c.a)?J(u):c,M(a,n,r=_(f.c.b,r),r.c,r.c,!1),r.b.i.c=!0,j(a,n))}else M(a,n,h.c,f,f,!0)}function x(a,t){var i=new oa,e=f(a.b);e.a.b=N,e.a.a=t,e.b.a.b=-N,e.b.a.a=t,a.a=e.b.a,i.a=e,i.f=0,i.d=!1,i.c=!1,i.h=!0,i.b=!1,e=Y(e=a.f,e.a,i),i.e=e}function q(a){this.a=new F,this.b=a,this.c=I}function Y(a,t,i){do{t=t.c}while(null!==t.b&&!a.c(a.b,t.b,i));return a=new F(i,t.a,t),t.a.c=a,t.a=a}function F(a,t,i){this.b=a||null,this.a=t||this,this.c=i||this}function z(){this.d=X,this.p=this.b=this.q=null,this.j=[0,0,0],this.s=100130,this.n=!1,this.o=this.a=this.e=this.f=null,this.m=!1,this.c=this.r=this.i=this.k=this.l=this.h=null}var X=0;function H(a,t){if(a.d!==t)for(;a.d!==t;)if(a.d<t)switch(a.d){case X:K(a,100151),a.u(null);break;case 1:K(a,100152),a.t()}else switch(a.d){case 2:K(a,100154),a.v();break;case 1:K(a,100153),a.w()}}function K(a,t){a.p&&a.p(t,a.c)}function Q(a,t){this.b=a||this,this.d=t||this,this.a=null,this.c=!1}function Z(){this.h=this,this.i=this.d=this.a=this.e=this.c=this.b=null,this.f=0}function J(a){return a.b.e}function $(){this.c=new aa,this.a=new Q,this.b=new Z,this.d=new Z,this.b.b=this.d,this.d.b=this.b}function aa(a,t){this.e=a||this,this.f=t||this,this.d=this.c=null,this.g=[0,0,0],this.h=this.a=this.b=0}function ta(){this.c=[],this.d=null,this.a=0,this.e=!1,this.b=new na}function ia(a){a.d=[];for(var t=0;t<a.a;t++)a.d[t]=t;a.d.sort(function(a){return function(t,e){return i(a[t],a[e])?1:-1}}(a.c)),a.e=!0,sa(a.b)}function ea(a,t){if(a.e){var i,e=a.b,b=++e.a;return 2*b>e.f&&(e.f*=2,e.c=ra(e.c,e.f+1)),0===e.b?i=b:(i=e.b,e.b=e.c[e.b]),e.e[i]=t,e.c[i]=b,e.d[b]=i,e.h&&fa(e,b),i}return e=a.a++,a.c[e]=t,-(e+1)}function ba(a){if(0===a.a)return ha(a.b);var t=a.c[a.d[a.a-1]];if(0!==a.b.a&&i(ca(a.b),t))return ha(a.b);do{--a.a}while(0<a.a&&null===a.c[a.d[a.a-1]]);return t}function na(){this.d=ra([0],33),this.e=[null,null],this.c=[0,0],this.a=0,this.f=32,this.b=0,this.h=!1,this.d[1]=1}function ra(a,t){for(var i=Array(t),e=0;e<a.length;e++)i[e]=a[e];for(;e<t;e++)i[e]=0;return i}function sa(a){for(var t=a.a;1<=t;--t)ua(a,t);a.h=!0}function ca(a){return a.e[a.d[1]]}function ha(a){var t=a.d,i=a.e,e=a.c,b=t[1],n=i[b];return 0<a.a&&(t[1]=t[a.a],e[t[1]]=1,i[b]=null,e[b]=a.b,a.b=b,0<--a.a&&ua(a,1)),n}function ua(a,t){for(var e=a.d,b=a.e,n=a.c,r=t,s=e[r];;){var c=r<<1;c<a.a&&i(b[e[c+1]],b[e[c]])&&(c+=1);var h=e[c];if(c>a.a||i(b[s],b[h])){e[r]=s,n[s]=r;break}e[r]=h,n[h]=r,r=c}}function fa(a,t){for(var e=a.d,b=a.e,n=a.c,r=t,s=e[r];;){var c=r>>1,h=e[c];if(0===c||i(b[h],b[s])){e[r]=s,n[s]=r;break}e[r]=h,n[h]=r,r=c}}function oa(){this.e=this.a=null,this.f=0,this.c=this.b=this.h=this.d=!1}function la(a){return a.e.c.b}function da(a){return a.e.a.b}(a=z.prototype).x=function(){H(this,X)},a.B=function(a,t){switch(a){case 100142:return;case 100140:switch(t){case 100130:case 100131:case 100132:case 100133:case 100134:return void(this.s=t)}break;case 100141:return void(this.m=!!t);default:return void K(this,100900)}K(this,100901)},a.y=function(a){switch(a){case 100142:return 0;case 100140:return this.s;case 100141:return this.m;default:K(this,100900)}return!1},a.A=function(a,t,i){this.j[0]=a,this.j[1]=t,this.j[2]=i},a.z=function(a,t){var i=t||null;switch(a){case 100100:case 100106:this.h=i;break;case 100104:case 100110:this.l=i;break;case 100101:case 100107:this.k=i;break;case 100102:case 100108:this.i=i;break;case 100103:case 100109:this.p=i;break;case 100105:case 100111:this.o=i;break;case 100112:this.r=i;break;default:K(this,100900)}},a.C=function(a,t){var i=!1,e=[0,0,0];H(this,2);for(var b=0;3>b;++b){var n=a[b];-1e150>n&&(n=-1e150,i=!0),1e150<n&&(n=1e150,i=!0),e[b]=n}i&&K(this,100155),null===(i=this.q)?o(i=f(this.b),i.b):(d(i),i=i.e),i.a.d=t,i.a.g[0]=e[0],i.a.g[1]=e[1],i.a.g[2]=e[2],i.f=1,i.b.f=-1,this.q=i},a.u=function(a){H(this,X),this.d=1,this.b=new $,this.c=a},a.t=function(){H(this,1),this.d=2,this.q=null},a.v=function(){H(this,2),this.d=1},a.w=function(){H(this,1),this.d=X;var a=!1,e=[f=this.j[0],n=this.j[1],s=this.j[2]];if(0===f&&0===n&&0===s){for(var n=[-2e150,-2e150,-2e150],r=[2e150,2e150,2e150],s=[],u=[],f=(a=this.b.c).e;f!==a;f=f.e)for(var o=0;3>o;++o){var d=f.g[o];d<r[o]&&(r[o]=d,u[o]=f),d>n[o]&&(n[o]=d,s[o]=f)}if(f=0,n[1]-r[1]>n[0]-r[0]&&(f=1),n[2]-r[2]>n[f]-r[f]&&(f=2),r[f]>=n[f])e[0]=0,e[1]=0,e[2]=1;else{for(n=0,r=u[f],s=s[f],u=[0,0,0],r=[r.g[0]-s.g[0],r.g[1]-s.g[1],r.g[2]-s.g[2]],o=[0,0,0],f=a.e;f!==a;f=f.e)o[0]=f.g[0]-s.g[0],o[1]=f.g[1]-s.g[1],o[2]=f.g[2]-s.g[2],u[0]=r[1]*o[2]-r[2]*o[1],u[1]=r[2]*o[0]-r[0]*o[2],u[2]=r[0]*o[1]-r[1]*o[0],(d=u[0]*u[0]+u[1]*u[1]+u[2]*u[2])>n&&(n=d,e[0]=u[0],e[1]=u[1],e[2]=u[2]);0>=n&&(e[0]=e[1]=e[2]=0,e[L(r)]=1)}a=!0}for(u=L(e),f=this.b.c,n=(u+1)%3,s=(u+2)%3,u=0<e[u]?1:-1,e=f.e;e!==f;e=e.e)e.b=e.g[n],e.a=u*e.g[s];if(a){for(e=0,f=(a=this.b.a).b;f!==a;f=f.b)if(!(0>=(n=f.a).f))do{e+=(n.a.b-n.b.a.b)*(n.a.a+n.b.a.a),n=n.e}while(n!==f.a);if(0>e)for(a=(e=this.b.c).e;a!==e;a=a.e)a.a=-a.a}for(this.n=!1,f=(e=this.b.b).h;f!==e;f=a)a=f.h,n=f.e,t(f.a,f.b.a)&&f.e.e!==f&&(C(this,n,f),l(f),n=(f=n).e),n.e===f&&(n!==f&&(n!==a&&n!==a.b||(a=a.h),l(n)),f!==a&&f!==a.b||(a=a.h),l(f));for(this.e=e=new ta,f=(a=this.b.c).e;f!==a;f=f.e)f.h=ea(e,f);for(ia(e),this.f=new q(this),x(this,-N),x(this,N);null!==(e=ba(this.e));){for(;;){a:if(f=this.e,0===f.a)a=ca(f.b);else if(a=f.c[f.d[f.a-1]],0!==f.b.a&&(f=ca(f.b),i(f,a))){a=f;break a}if(null===a||!t(a,e))break;a=ba(this.e),C(this,e.c,a.c)}W(this,e)}for(this.a=this.f.a.a.b.a.a,e=0;null!==(a=this.f.a.a.b);)a.h||++e,U(a);for(this.f=null,(e=this.e).b=null,e.d=null,this.e=e.c=null,f=(e=this.b).a.b;f!==e.a;f=a)a=f.b,(f=f.a).e.e===f&&(w(f.c,f),l(f));if(!this.n){if(e=this.b,this.m)for(f=e.b.h;f!==e.b;f=a)a=f.h,f.b.d.c!==f.d.c?f.f=f.d.c?1:-1:l(f);else for(f=e.a.b;f!==e.a;f=a)if(a=f.b,f.c){for(f=f.a;i(f.b.a,f.a);f=f.c.b);for(;i(f.a,f.b.a);f=f.e);for(n=f.c.b,s=void 0;f.e!==n;)if(i(f.b.a,n.a)){for(;n.e!==f&&(c(n.e)||0>=b(n.a,n.b.a,n.e.b.a));)n=(s=_(n.e,n)).b;n=n.c.b}else{for(;n.e!==f&&(h(f.c.b)||0<=b(f.b.a,f.a,f.c.b.a));)f=(s=_(f,f.c.b)).b;f=f.e}for(;n.e.e!==f;)n=(s=_(n.e,n)).b}if(this.h||this.i||this.k||this.l)if(this.m){for(a=(e=this.b).a.b;a!==e.a;a=a.b)if(a.c){this.h&&this.h(2,this.c),f=a.a;do{this.k&&this.k(f.a.d,this.c),f=f.e}while(f!==a.a);this.i&&this.i(this.c)}}else{for(e=this.b,a=!!this.l,f=!1,n=-1,s=e.a.d;s!==e.a;s=s.d)if(s.c){f||(this.h&&this.h(4,this.c),f=!0),u=s.a;do{a&&(n!==(r=u.b.d.c?0:1)&&(n=r,this.l&&this.l(!!n,this.c))),this.k&&this.k(u.a.d,this.c),u=u.e}while(u!==s.a)}f&&this.i&&this.i(this.c)}if(this.r){for(f=(e=this.b).a.b;f!==e.a;f=a)if(a=f.b,!f.c){s=(n=f.a).e,u=void 0;do{s=(u=s).e,u.d=null,null===u.b.d&&(u.c===u?p(u.a,null):(u.a.c=u.c,E(u,J(u))),(r=u.b).c===r?p(r.a,null):(r.a.c=r.c,E(r,J(r))),T(u))}while(u!==n);n=f.d,(f=f.b).d=n,n.b=f}return this.r(this.b),void(this.c=this.b=null)}}this.b=this.c=null},this.libtess={GluTesselator:z,windingRule:{GLU_TESS_WINDING_ODD:100130,GLU_TESS_WINDING_NONZERO:100131,GLU_TESS_WINDING_POSITIVE:100132,GLU_TESS_WINDING_NEGATIVE:100133,GLU_TESS_WINDING_ABS_GEQ_TWO:100134},primitiveType:{GL_LINE_LOOP:2,GL_TRIANGLES:4,GL_TRIANGLE_STRIP:5,GL_TRIANGLE_FAN:6},errorType:{GLU_TESS_MISSING_BEGIN_POLYGON:100151,GLU_TESS_MISSING_END_POLYGON:100153,GLU_TESS_MISSING_BEGIN_CONTOUR:100152,GLU_TESS_MISSING_END_CONTOUR:100154,GLU_TESS_COORD_TOO_LARGE:100155,GLU_TESS_NEED_COMBINE_CALLBACK:100156},gluEnum:{GLU_TESS_MESH:100112,GLU_TESS_TOLERANCE:100142,GLU_TESS_WINDING_RULE:100140,GLU_TESS_BOUNDARY_ONLY:100141,GLU_INVALID_ENUM:100900,GLU_INVALID_VALUE:100901,GLU_TESS_BEGIN:100100,GLU_TESS_VERTEX:100101,GLU_TESS_END:100102,GLU_TESS_ERROR:100103,GLU_TESS_EDGE_FLAG:100104,GLU_TESS_COMBINE:100105,GLU_TESS_BEGIN_DATA:100106,GLU_TESS_VERTEX_DATA:100107,GLU_TESS_END_DATA:100108,GLU_TESS_ERROR_DATA:100109,GLU_TESS_EDGE_FLAG_DATA:100110,GLU_TESS_COMBINE_DATA:100111}},z.prototype.gluDeleteTess=z.prototype.x,z.prototype.gluTessProperty=z.prototype.B,z.prototype.gluGetTessProperty=z.prototype.y,z.prototype.gluTessNormal=z.prototype.A,z.prototype.gluTessCallback=z.prototype.z,z.prototype.gluTessVertex=z.prototype.C,z.prototype.gluTessBeginPolygon=z.prototype.u,z.prototype.gluTessBeginContour=z.prototype.t,z.prototype.gluTessEndContour=z.prototype.v,z.prototype.gluTessEndPolygon=z.prototype.w,"undefined"!=typeof module&&(module.exports=this.libtess);
},{}],"S5rR":[function(require,module,exports) {
"use strict";function t(t,r){return t=2===t.length?[t[0],t[1],0]:t,r=2===r.length?[r[0],r[1],0]:r,[t[1]*r[2]-t[2]*r[1],t[2]*r[0]-t[0]*r[2],t[0]*r[1]-t[1]*r[0]]}function r(t){return Math.sqrt(t.slice(0,3).reduce(function(t,r,e){return t+r*r},0))}function e(t,r){return t.reduce(function(t,e,n){return t+e*r[n]},0)}function n(t){var e=r(t);return t.slice(0,3).map(function(t){return t/e})}function u(t,r){return t.slice(0,3).map(function(t,e){return t+r[e]})}function o(t,r){return t.slice(0,3).map(function(t,e){return t-r[e]})}Object.defineProperty(exports,"__esModule",{value:!0}),exports.cross=t,exports.length=r,exports.dot=e,exports.normalize=n,exports.add=u,exports.subtract=o;var c=exports.sub=o;
},{}],"vVQq":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.WINDING_CW=exports.WINDING_CCW=exports.WINDING_UNKNOWN=void 0;var r=function(){return function(r,n){if(Array.isArray(r))return r;if(Symbol.iterator in Object(r))return function(r,n){var t=[],e=!0,u=!1,o=void 0;try{for(var i,a=r[Symbol.iterator]();!(e=(i=a.next()).done)&&(t.push(i.value),!n||t.length!==n);e=!0);}catch(l){u=!0,o=l}finally{try{!e&&a.return&&a.return()}finally{if(u)throw o}}return t}(r,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();exports.ccw=c,exports.normal=s,exports.area=f,exports.centroid=v,exports.is_ccw=p,exports.is_cw=x,exports.winding=h,exports.bounds=d,exports.ensure_cw=y,exports.ensure_ccw=g,exports.triangulate=N,exports.subtract=M,exports.union=_,exports.intersection=b;var n=require("./tesselator"),t=o(n),e=require("./vec"),u=o(e);function o(r){if(r&&r.__esModule)return r;var n={};if(null!=r)for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(n[t]=r[t]);return n.default=r,n}var i=exports.WINDING_UNKNOWN=0,a=exports.WINDING_CCW=1,l=exports.WINDING_CW=2;function c(r,n,t){return(n[0]-r[0])*(t[1]-r[1])-(t[0]-r[0])*(n[1]-r[1])}function s(n){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(n.length<3)return null;var e=n.map(function(r){return r.length>=3?r:[r[0],r[1],0]});if(!t){var o=r(e,3),i=o[0],a=o[1],l=o[2],c=u.subtract(a,i),s=u.subtract(l,i),f=u.normalize(u.cross(c,s));if(!f.some(function(r){return isNaN(r)}))return f;if(3===n.length)return null}var v=[0,0,0];return e.forEach(function(r,t){var u=e[(t+1)%n.length];v[0]=v[0]+(r[1]-u[1])*(r[2]+u[2]),v[1]=v[1]+(r[2]-u[2])*(r[0]+u[0]),v[2]=v[2]+(r[0]-u[0])*(r[1]+u[1])}),(v=u.normalize(v)).some(function(r){return isNaN(r)})?null:v}function f(r){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(r.length<3)return 0;if(r[0].length<3)return r.reduce(function(n,t,e){var u=r[e+1]||r[0];return n+t[0]*u[1]-u[0]*t[1]},0)/2;var t=r.length,e=n||s(r),o=[0,0,0];if(!e)return 0;for(var i=0;i<t;++i){var a=r[i],l=r[(i+1)%t];o=u.add(o,u.cross(a,l))}return u.dot(o,e)/2}function v(n){var t=n.reduce(function(t,e,u){var o=r(t,2),i=o[0],a=o[1],l=n[u+1]||n[0],c=e[0]*l[1]-l[0]*e[1];return[i+(e[0]+l[0])*c,a+(e[1]+l[1])*c]},[0,0]),e=r(t,2),u=e[0],o=e[1],i=f(n);return 0!==u&&(u/=6*Math.abs(i)),0!==o&&(o/=6*Math.abs(i)),i<0&&(u=-u,o=-o),[u,o]}function p(r){return f(r,arguments.length>1&&void 0!==arguments[1]?arguments[1]:null)>0}function x(r){return f(r,arguments.length>1&&void 0!==arguments[1]?arguments[1]:null)<0}function h(r){var n=f(r,arguments.length>1&&void 0!==arguments[1]?arguments[1]:null);return n<0?l:n>0?a:i}function d(r){var n=[Number.MAX_VALUE,Number.MAX_VALUE],t=[-Number.MAX_VALUE,-Number.MAX_VALUE];return r.forEach(function(r){for(var e=0;e<Math.min(3,r.length);++e)n[e]=Math.min(n[e],r[e]),t[e]=Math.max(t[e],r[e])}),{xMin:n[0],yMin:n[1],xMax:t[0],yMax:t[1]}}function y(r){return p(r,arguments.length>1&&void 0!==arguments[1]?arguments[1]:null)&&r.reverse(),r}function g(r){return x(r,arguments.length>1&&void 0!==arguments[1]?arguments[1]:null)&&r.reverse(),r}function N(r,n){if(!r||r.length<3)return r;var e=d(r),u={polygons:[r],holes:n=n.filter(function(r){var n=d(r);return!(n.xMin>e.xMax||n.yMin>e.yMax||n.xMax<e.xMin||n.yMax<e.yMin)})};return t.run(u).reduce(function(r,n){return r.concat(n)},[])}function M(){for(var r=arguments.length,n=Array(r),e=0;e<r;e++)n[e]=arguments[e];var u={polygons:[g(n[0])],holes:n.slice(1).map(function(r){return y(r)}),boundaryOnly:!0,autoWinding:!1};return t.run(u)}function _(){for(var r=arguments.length,n=Array(r),e=0;e<r;e++)n[e]=arguments[e];var u={polygons:n.map(function(r){return g(r)}),boundaryOnly:!0,autoWinding:!1};return t.run(u)}function b(r,n){var e={polygons:[g(r),g(n)],boundaryOnly:!0,windingRule:t.GLU_TESS_WINDING_ABS_GEQ_TWO,autoWinding:!1};return t.run(e)}
},{"./tesselator":"HXZa","./vec":"S5rR"}],"HXZa":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Tesselator=exports.DEFAULT_OPTIONS=exports.GLU_TESS_WINDING_ABS_GEQ_TWO=exports.GLU_TESS_WINDING_NEGATIVE=exports.GLU_TESS_WINDING_POSITIVE=exports.GLU_TESS_WINDING_NONZERO=exports.GLU_TESS_WINDING_ODD=exports.GL_TRIANGLE_FAN=exports.GL_TRIANGLE_STRIP=exports.GL_TRIANGLES=exports.GL_LINE_LOOP=void 0;var e=function(){return function(e,r){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,r){var t=[],n=!0,i=!1,o=void 0;try{for(var u,s=e[Symbol.iterator]();!(n=(u=s.next()).done)&&(t.push(u.value),!r||t.length!==r);n=!0);}catch(a){i=!0,o=a}finally{try{!n&&s.return&&s.return()}finally{if(i)throw o}}return t}(e,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),r=function(){function e(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(r,t,n){return t&&e(r.prototype,t),n&&e(r,n),r}}();exports.run=G;var t=require("libtess"),n=require("./polygon");function i(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function o(e,r){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!r||"object"!=typeof r&&"function"!=typeof r?e:r}function u(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function, not "+typeof r);e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),r&&(Object.setPrototypeOf?Object.setPrototypeOf(e,r):e.__proto__=r)}var s=t.primitiveType.GL_LINE_LOOP,a=t.primitiveType.GL_TRIANGLES,_=t.primitiveType.GL_TRIANGLE_STRIP,l=t.primitiveType.GL_TRIANGLE_FAN;exports.GL_LINE_LOOP=s,exports.GL_TRIANGLES=a,exports.GL_TRIANGLE_STRIP=_,exports.GL_TRIANGLE_FAN=l;var c=t.windingRule.GLU_TESS_WINDING_ODD,f=t.windingRule.GLU_TESS_WINDING_NONZERO,h=t.windingRule.GLU_TESS_WINDING_POSITIVE,T=t.windingRule.GLU_TESS_WINDING_NEGATIVE,p=t.windingRule.GLU_TESS_WINDING_ABS_GEQ_TWO;exports.GLU_TESS_WINDING_ODD=c,exports.GLU_TESS_WINDING_NONZERO=f,exports.GLU_TESS_WINDING_POSITIVE=h,exports.GLU_TESS_WINDING_NEGATIVE=T,exports.GLU_TESS_WINDING_ABS_GEQ_TWO=p;var v=exports.DEFAULT_OPTIONS={polygons:[],holes:[],windingRule:h,boundaryOnly:!1,normal:null,autoWinding:!0},y=exports.Tesselator=function(c){function f(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:2;i(this,f);var r=o(this,(f.__proto__||Object.getPrototypeOf(f)).call(this));return r._vsize=e,r._current=[],r._out=[],r._primitiveType=0,r.gluTessCallback(t.gluEnum.GLU_TESS_VERTEX_DATA,r._vertex),r.gluTessCallback(t.gluEnum.GLU_TESS_BEGIN,r._begin),r.gluTessCallback(t.gluEnum.GLU_TESS_END,r._end),r.gluTessCallback(t.gluEnum.GLU_TESS_ERROR,r._error),r.gluTessCallback(t.gluEnum.GLU_TESS_COMBINE,r._combine),r.gluTessCallback(t.gluEnum.GLU_TESS_EDGE_FLAG,r._edge),r}return u(f,t.GluTesselator),r(f,[{key:"start",value:function(e,r){this._current=[],this._out=[],this.gluTessBeginPolygon();var t=!0,n=!1,i=void 0;try{for(var o,u=e[Symbol.iterator]();!(t=(o=u.next()).done);t=!0){var s=o.value;this.gluTessBeginContour();var a=!0,_=!1,l=void 0;try{for(var c,f=s[Symbol.iterator]();!(a=(c=f.next()).done);a=!0){var h=c.value;this.gluTessVertex(h,h)}}catch(b){_=!0,l=b}finally{try{!a&&f.return&&f.return()}finally{if(_)throw l}}this.gluTessEndContour()}}catch(b){n=!0,i=b}finally{try{!t&&u.return&&u.return()}finally{if(n)throw i}}var T=!0,p=!1,v=void 0;try{for(var y,E=r[Symbol.iterator]();!(T=(y=E.next()).done);T=!0){var G=y.value;this.gluTessBeginContour();var S=!0,N=!1,g=void 0;try{for(var I,L=G[Symbol.iterator]();!(S=(I=L.next()).done);S=!0){var d=I.value;this.gluTessVertex(d,d)}}catch(b){N=!0,g=b}finally{try{!S&&L.return&&L.return()}finally{if(N)throw g}}this.gluTessEndContour()}}catch(b){p=!0,v=b}finally{try{!T&&E.return&&E.return()}finally{if(p)throw v}}this.gluTessEndPolygon()}},{key:"run",value:function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,i=Object.assign({},v,r),o=i.polygons,u=i.holes,s=i.autoWinding,a=i.boundaryOnly;if(!o||!o.length)throw new Error("need at least a single polygon");s&&(o=o.filter(function(e){return Math.abs((0,n.area)(e))>0}).map(function(e){return(0,n.is_cw)(e)&&e.reverse(),e}),u=u.filter(function(e){return Math.abs((0,n.area)(e))>0}).map(function(e){return(0,n.is_ccw)(e)&&e.reverse(),e}));var _=i.normal?i.normal:(0,n.normal)(o[0],!0),l=e(_,3),c=l[0],f=l[1],h=l[2];return this.gluTessNormal(c,f,h),this.gluTessProperty(t.gluEnum.GLU_TESS_BOUNDARY_ONLY,a),this.gluTessProperty(t.gluEnum.GLU_TESS_WINDING_RULE,i.windingRule),this.start(o,u),this._out}},{key:"_begin",value:function(e){this._primitiveType=e,this._current=[]}},{key:"_end_fan",value:function(){for(var e=this._current.shift(),r=this._current.shift();this._current.length;){var t=this._current.shift();this._out.push(e,r,t),r=t}}},{key:"_end_strip",value:function(){for(var e=this._current.shift(),r=this._current.shift();this._current.length;){var t=this._current.shift();this._out.push(e,r,t),e=r,r=t}}},{key:"_end",value:function(){switch(this._primitiveType){case l:this._end_fan();break;case _:this._end_strip();break;case a:case s:default:this._out.push(this._current)}}},{key:"_vertex",value:function(e){this._current.push(e)}},{key:"_edge",value:function(){}},{key:"_error",value:function(e){console.error("error number: "+e)}},{key:"_combine",value:function(e,r,t){for(var n=0;n<4;++n)if(!r[n]){r[n]=new Array(this._vsize);for(var i=0;i<this._vsize;++i)r[n][i]=0}for(var o=new Array(this._vsize),u=0;u<this._vsize;++u)o[u]=r[0][u]*t[0]+r[1][u]*t[1]+r[2][u]*t[2]+r[3][u]*t[3];return o}}]),f}();function E(e){for(var r=[],t=0;t<e.length;t+=3)r.push([e[t],e[t+1],e[t+2]]);return r}function G(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,r=new y(e.vertexSize).run(e);return e.boundaryOnly?r:r.map(E)}
},{"libtess":"oqNR","./polygon":"vVQq"}],"sLCx":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.tesselator=exports.polygon=void 0;var o=require("./tesselator"),e=l(o),r=require("./polygon"),t=l(r);function l(o){if(o&&o.__esModule)return o;var e={};if(null!=o)for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r]);return e.default=o,e}var n=exports.polygon=t,s=exports.tesselator=e;"undefined"!=typeof window&&(window.PolygonTools={polygon:t,tesselator:e,version:window.polygon_tools_version||"",build:window.polygon_tools_rev||""});
},{"./tesselator":"HXZa","./polygon":"vVQq"}],"Focm":[function(require,module,exports) {
function t(t){return o(t)||e(t)||r(t)||n()}function n(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function r(t,n){if(t){if("string"==typeof t)return i(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?i(t,n):void 0}}function e(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function o(t){if(Array.isArray(t))return i(t)}function i(t,n){(null==n||n>t.length)&&(n=t.length);for(var r=0,e=new Array(n);r<n;r++)e[r]=t[r];return e}var a=require("polygon-tools"),c=a.polygon;function u(n,r){var e=n.map(function(t){switch(t.regionType||t.type){case"polygon":return t.points.length<3?null:t;case"bounding-box":return{regionType:"polygon",classification:t.classification,points:[{x:t.centerX-t.width/2,y:t.centerY-t.height/2},{x:t.centerX+t.width/2,y:t.centerY-t.height/2},{x:t.centerX+t.width/2,y:t.centerY+t.height/2},{x:t.centerX-t.width/2,y:t.centerY+t.height/2}]};default:return null}}).filter(Boolean),o=e.map(function(t){return t.points.map(function(t){return[t.x,t.y]})}),i=e.findIndex(function(t){return t.classification===r});if(-1===i)return[];for(var a=[o[i]],u=function(n){var i=o[n];a=e[n].classification===r?[].concat(t(a),[i]):a.flatMap(function(t){return c.subtract(t,i)})},f=1;f<o.length;f++)u(f);return a}function f(t){return t.map(c.area).reduce(function(t,n){return t+n},0)}function l(n,r){for(var e=0,o=0,i=0,a=Array.from(new Set([].concat(t(n.map(function(t){return t.classification})),t(r.map(function(t){return t.classification})))));i<a.length;i++){var l=a[i],s=u(n,l),p=u(r,l),y=[[0,0],[1,0],[1,1],[0,1]],g=c.subtract.apply(c,[y].concat(t(s))),h=c.subtract.apply(c,[y].concat(t(p))),m=c.subtract.apply(c,[y].concat(t(s),t(p))),d=1-f(g),b=1-f(h),v=1-f(m);e+=v,o+=d+b-v}return 0===e?1:o/e}module.exports={getIOU:l,getPolygonFromUDTRegions:u};
},{"polygon-tools":"sLCx"}]},{},["Focm"], null)
//# sourceMappingURL=/index.js.map