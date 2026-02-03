package androidx.appcompat.view;

import android.app.Activity;
import android.content.Context;
import android.content.ContextWrapper;
import android.content.res.ColorStateList;
import android.content.res.TypedArray;
import android.content.res.XmlResourceParser;
import android.graphics.PorterDuff;
import android.util.AttributeSet;
import android.util.Log;
import android.util.Xml;
import android.view.InflateException;
import android.view.Menu;
import android.view.MenuInflater;
import android.view.MenuItem;
import android.view.SubMenu;
import android.view.View;
import androidx.appcompat.widget.e0;
import androidx.appcompat.widget.v0;
import androidx.core.view.q;
import androidx.recyclerview.widget.RecyclerView;
import f.j;
import java.io.IOException;
import java.lang.reflect.Constructor;
import java.lang.reflect.Method;
import org.xmlpull.v1.XmlPullParserException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class e extends MenuInflater {

    /* renamed from: e  reason: collision with root package name */
    static final Class[] f1207e;

    /* renamed from: f  reason: collision with root package name */
    static final Class[] f1208f;

    /* renamed from: a  reason: collision with root package name */
    final Object[] f1209a;

    /* renamed from: b  reason: collision with root package name */
    final Object[] f1210b;

    /* renamed from: c  reason: collision with root package name */
    Context f1211c;

    /* renamed from: d  reason: collision with root package name */
    private Object f1212d;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class a implements MenuItem.OnMenuItemClickListener {

        /* renamed from: c  reason: collision with root package name */
        private static final Class[] f1213c = {MenuItem.class};

        /* renamed from: a  reason: collision with root package name */
        private Object f1214a;

        /* renamed from: b  reason: collision with root package name */
        private Method f1215b;

        public a(Object obj, String str) {
            this.f1214a = obj;
            Class<?> cls = obj.getClass();
            try {
                this.f1215b = cls.getMethod(str, f1213c);
            } catch (Exception e10) {
                InflateException inflateException = new InflateException("Couldn't resolve menu item onClick handler " + str + " in class " + cls.getName());
                inflateException.initCause(e10);
                throw inflateException;
            }
        }

        @Override // android.view.MenuItem.OnMenuItemClickListener
        public boolean onMenuItemClick(MenuItem menuItem) {
            try {
                if (this.f1215b.getReturnType() == Boolean.TYPE) {
                    return ((Boolean) this.f1215b.invoke(this.f1214a, menuItem)).booleanValue();
                }
                this.f1215b.invoke(this.f1214a, menuItem);
                return true;
            } catch (Exception e10) {
                throw new RuntimeException(e10);
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class b {
        androidx.core.view.b A;
        private CharSequence B;
        private CharSequence C;
        private ColorStateList D = null;
        private PorterDuff.Mode E = null;

        /* renamed from: a  reason: collision with root package name */
        private Menu f1216a;

        /* renamed from: b  reason: collision with root package name */
        private int f1217b;

        /* renamed from: c  reason: collision with root package name */
        private int f1218c;

        /* renamed from: d  reason: collision with root package name */
        private int f1219d;

        /* renamed from: e  reason: collision with root package name */
        private int f1220e;

        /* renamed from: f  reason: collision with root package name */
        private boolean f1221f;

        /* renamed from: g  reason: collision with root package name */
        private boolean f1222g;

        /* renamed from: h  reason: collision with root package name */
        private boolean f1223h;

        /* renamed from: i  reason: collision with root package name */
        private int f1224i;

        /* renamed from: j  reason: collision with root package name */
        private int f1225j;

        /* renamed from: k  reason: collision with root package name */
        private CharSequence f1226k;

        /* renamed from: l  reason: collision with root package name */
        private CharSequence f1227l;

        /* renamed from: m  reason: collision with root package name */
        private int f1228m;

        /* renamed from: n  reason: collision with root package name */
        private char f1229n;

        /* renamed from: o  reason: collision with root package name */
        private int f1230o;

        /* renamed from: p  reason: collision with root package name */
        private char f1231p;

        /* renamed from: q  reason: collision with root package name */
        private int f1232q;

        /* renamed from: r  reason: collision with root package name */
        private int f1233r;

        /* renamed from: s  reason: collision with root package name */
        private boolean f1234s;

        /* renamed from: t  reason: collision with root package name */
        private boolean f1235t;

        /* renamed from: u  reason: collision with root package name */
        private boolean f1236u;

        /* renamed from: v  reason: collision with root package name */
        private int f1237v;

        /* renamed from: w  reason: collision with root package name */
        private int f1238w;

        /* renamed from: x  reason: collision with root package name */
        private String f1239x;

        /* renamed from: y  reason: collision with root package name */
        private String f1240y;

        /* renamed from: z  reason: collision with root package name */
        private String f1241z;

        public b(Menu menu) {
            this.f1216a = menu;
            h();
        }

        private char c(String str) {
            if (str == null) {
                return (char) 0;
            }
            return str.charAt(0);
        }

        private Object e(String str, Class[] clsArr, Object[] objArr) {
            try {
                Constructor<?> constructor = Class.forName(str, false, e.this.f1211c.getClassLoader()).getConstructor(clsArr);
                constructor.setAccessible(true);
                return constructor.newInstance(objArr);
            } catch (Exception e10) {
                Log.w("SupportMenuInflater", "Cannot instantiate class: " + str, e10);
                return null;
            }
        }

        private void i(MenuItem menuItem) {
            boolean z10;
            MenuItem enabled = menuItem.setChecked(this.f1234s).setVisible(this.f1235t).setEnabled(this.f1236u);
            boolean z11 = false;
            if (this.f1233r >= 1) {
                z10 = true;
            } else {
                z10 = false;
            }
            enabled.setCheckable(z10).setTitleCondensed(this.f1227l).setIcon(this.f1228m);
            int i10 = this.f1237v;
            if (i10 >= 0) {
                menuItem.setShowAsAction(i10);
            }
            if (this.f1241z != null) {
                if (!e.this.f1211c.isRestricted()) {
                    menuItem.setOnMenuItemClickListener(new a(e.this.b(), this.f1241z));
                } else {
                    throw new IllegalStateException("The android:onClick attribute cannot be used within a restricted context");
                }
            }
            if (this.f1233r >= 2) {
                if (menuItem instanceof androidx.appcompat.view.menu.g) {
                    ((androidx.appcompat.view.menu.g) menuItem).t(true);
                } else if (menuItem instanceof k.c) {
                    ((k.c) menuItem).h(true);
                }
            }
            String str = this.f1239x;
            if (str != null) {
                menuItem.setActionView((View) e(str, e.f1207e, e.this.f1209a));
                z11 = true;
            }
            int i11 = this.f1238w;
            if (i11 > 0) {
                if (!z11) {
                    menuItem.setActionView(i11);
                } else {
                    Log.w("SupportMenuInflater", "Ignoring attribute 'itemActionViewLayout'. Action view already specified.");
                }
            }
            androidx.core.view.b bVar = this.A;
            if (bVar != null) {
                q.a(menuItem, bVar);
            }
            q.c(menuItem, this.B);
            q.g(menuItem, this.C);
            q.b(menuItem, this.f1229n, this.f1230o);
            q.f(menuItem, this.f1231p, this.f1232q);
            PorterDuff.Mode mode = this.E;
            if (mode != null) {
                q.e(menuItem, mode);
            }
            ColorStateList colorStateList = this.D;
            if (colorStateList != null) {
                q.d(menuItem, colorStateList);
            }
        }

        public void a() {
            this.f1223h = true;
            i(this.f1216a.add(this.f1217b, this.f1224i, this.f1225j, this.f1226k));
        }

        public SubMenu b() {
            this.f1223h = true;
            SubMenu addSubMenu = this.f1216a.addSubMenu(this.f1217b, this.f1224i, this.f1225j, this.f1226k);
            i(addSubMenu.getItem());
            return addSubMenu;
        }

        public boolean d() {
            return this.f1223h;
        }

        public void f(AttributeSet attributeSet) {
            TypedArray obtainStyledAttributes = e.this.f1211c.obtainStyledAttributes(attributeSet, j.f23490o1);
            this.f1217b = obtainStyledAttributes.getResourceId(j.f23500q1, 0);
            this.f1218c = obtainStyledAttributes.getInt(j.f23510s1, 0);
            this.f1219d = obtainStyledAttributes.getInt(j.f23515t1, 0);
            this.f1220e = obtainStyledAttributes.getInt(j.f23520u1, 0);
            this.f1221f = obtainStyledAttributes.getBoolean(j.f23505r1, true);
            this.f1222g = obtainStyledAttributes.getBoolean(j.f23495p1, true);
            obtainStyledAttributes.recycle();
        }

        public void g(AttributeSet attributeSet) {
            boolean z10;
            v0 u10 = v0.u(e.this.f1211c, attributeSet, j.f23525v1);
            this.f1224i = u10.n(j.f23540y1, 0);
            this.f1225j = (u10.k(j.B1, this.f1218c) & (-65536)) | (u10.k(j.C1, this.f1219d) & 65535);
            this.f1226k = u10.p(j.D1);
            this.f1227l = u10.p(j.E1);
            this.f1228m = u10.n(j.f23530w1, 0);
            this.f1229n = c(u10.o(j.F1));
            this.f1230o = u10.k(j.M1, RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT);
            this.f1231p = c(u10.o(j.G1));
            this.f1232q = u10.k(j.Q1, RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT);
            if (u10.s(j.H1)) {
                this.f1233r = u10.a(j.H1, false) ? 1 : 0;
            } else {
                this.f1233r = this.f1220e;
            }
            this.f1234s = u10.a(j.f23545z1, false);
            this.f1235t = u10.a(j.A1, this.f1221f);
            this.f1236u = u10.a(j.f23535x1, this.f1222g);
            this.f1237v = u10.k(j.R1, -1);
            this.f1241z = u10.o(j.I1);
            this.f1238w = u10.n(j.J1, 0);
            this.f1239x = u10.o(j.L1);
            String o10 = u10.o(j.K1);
            this.f1240y = o10;
            if (o10 != null) {
                z10 = true;
            } else {
                z10 = false;
            }
            if (z10 && this.f1238w == 0 && this.f1239x == null) {
                this.A = (androidx.core.view.b) e(o10, e.f1208f, e.this.f1210b);
            } else {
                if (z10) {
                    Log.w("SupportMenuInflater", "Ignoring attribute 'actionProviderClass'. Action view already specified.");
                }
                this.A = null;
            }
            this.B = u10.p(j.N1);
            this.C = u10.p(j.S1);
            if (u10.s(j.P1)) {
                this.E = e0.e(u10.k(j.P1, -1), this.E);
            } else {
                this.E = null;
            }
            if (u10.s(j.O1)) {
                this.D = u10.c(j.O1);
            } else {
                this.D = null;
            }
            u10.x();
            this.f1223h = false;
        }

        public void h() {
            this.f1217b = 0;
            this.f1218c = 0;
            this.f1219d = 0;
            this.f1220e = 0;
            this.f1221f = true;
            this.f1222g = true;
        }
    }

    static {
        Class[] clsArr = {Context.class};
        f1207e = clsArr;
        f1208f = clsArr;
    }

    public e(Context context) {
        super(context);
        this.f1211c = context;
        Object[] objArr = {context};
        this.f1209a = objArr;
        this.f1210b = objArr;
    }

    private Object a(Object obj) {
        if (obj instanceof Activity) {
            return obj;
        }
        if (obj instanceof ContextWrapper) {
            return a(((ContextWrapper) obj).getBaseContext());
        }
        return obj;
    }

    /* JADX WARN: Code restructure failed: missing block: B:12:0x003b, code lost:
        r6 = false;
        r7 = false;
        r8 = null;
     */
    /* JADX WARN: Code restructure failed: missing block: B:13:0x0040, code lost:
        if (r6 != false) goto L64;
     */
    /* JADX WARN: Code restructure failed: missing block: B:14:0x0042, code lost:
        if (r15 == 1) goto L60;
     */
    /* JADX WARN: Code restructure failed: missing block: B:16:0x0048, code lost:
        if (r15 == 2) goto L44;
     */
    /* JADX WARN: Code restructure failed: missing block: B:18:0x004b, code lost:
        if (r15 == 3) goto L14;
     */
    /* JADX WARN: Code restructure failed: missing block: B:20:0x004f, code lost:
        r15 = r13.getName();
     */
    /* JADX WARN: Code restructure failed: missing block: B:21:0x0053, code lost:
        if (r7 == false) goto L21;
     */
    /* JADX WARN: Code restructure failed: missing block: B:23:0x0059, code lost:
        if (r15.equals(r8) == false) goto L21;
     */
    /* JADX WARN: Code restructure failed: missing block: B:24:0x005b, code lost:
        r7 = false;
        r8 = null;
     */
    /* JADX WARN: Code restructure failed: missing block: B:26:0x0062, code lost:
        if (r15.equals("group") == false) goto L25;
     */
    /* JADX WARN: Code restructure failed: missing block: B:27:0x0064, code lost:
        r0.h();
     */
    /* JADX WARN: Code restructure failed: missing block: B:29:0x006c, code lost:
        if (r15.equals("item") == false) goto L38;
     */
    /* JADX WARN: Code restructure failed: missing block: B:31:0x0072, code lost:
        if (r0.d() != false) goto L37;
     */
    /* JADX WARN: Code restructure failed: missing block: B:32:0x0074, code lost:
        r15 = r0.A;
     */
    /* JADX WARN: Code restructure failed: missing block: B:33:0x0076, code lost:
        if (r15 == null) goto L35;
     */
    /* JADX WARN: Code restructure failed: missing block: B:35:0x007c, code lost:
        if (r15.a() == false) goto L35;
     */
    /* JADX WARN: Code restructure failed: missing block: B:36:0x007e, code lost:
        r0.b();
     */
    /* JADX WARN: Code restructure failed: missing block: B:37:0x0082, code lost:
        r0.a();
     */
    /* JADX WARN: Code restructure failed: missing block: B:39:0x008a, code lost:
        if (r15.equals("menu") == false) goto L42;
     */
    /* JADX WARN: Code restructure failed: missing block: B:40:0x008c, code lost:
        r6 = true;
     */
    /* JADX WARN: Code restructure failed: missing block: B:41:0x008e, code lost:
        if (r7 == false) goto L45;
     */
    /* JADX WARN: Code restructure failed: missing block: B:43:0x0091, code lost:
        r15 = r13.getName();
     */
    /* JADX WARN: Code restructure failed: missing block: B:44:0x0099, code lost:
        if (r15.equals("group") == false) goto L49;
     */
    /* JADX WARN: Code restructure failed: missing block: B:45:0x009b, code lost:
        r0.f(r14);
     */
    /* JADX WARN: Code restructure failed: missing block: B:47:0x00a3, code lost:
        if (r15.equals("item") == false) goto L53;
     */
    /* JADX WARN: Code restructure failed: missing block: B:48:0x00a5, code lost:
        r0.g(r14);
     */
    /* JADX WARN: Code restructure failed: missing block: B:50:0x00ad, code lost:
        if (r15.equals("menu") == false) goto L57;
     */
    /* JADX WARN: Code restructure failed: missing block: B:51:0x00af, code lost:
        c(r13, r14, r0.b());
     */
    /* JADX WARN: Code restructure failed: missing block: B:52:0x00b7, code lost:
        r8 = r15;
        r7 = true;
     */
    /* JADX WARN: Code restructure failed: missing block: B:53:0x00b9, code lost:
        r15 = r13.next();
     */
    /* JADX WARN: Code restructure failed: missing block: B:55:0x00c5, code lost:
        throw new java.lang.RuntimeException("Unexpected end of document");
     */
    /* JADX WARN: Code restructure failed: missing block: B:56:0x00c6, code lost:
        return;
     */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private void c(org.xmlpull.v1.XmlPullParser r13, android.util.AttributeSet r14, android.view.Menu r15) {
        /*
            r12 = this;
            androidx.appcompat.view.e$b r0 = new androidx.appcompat.view.e$b
            r0.<init>(r15)
            int r15 = r13.getEventType()
        L9:
            r1 = 2
            java.lang.String r2 = "menu"
            r3 = 1
            if (r15 != r1) goto L35
            java.lang.String r15 = r13.getName()
            boolean r4 = r15.equals(r2)
            if (r4 == 0) goto L1e
            int r15 = r13.next()
            goto L3b
        L1e:
            java.lang.RuntimeException r13 = new java.lang.RuntimeException
            java.lang.StringBuilder r14 = new java.lang.StringBuilder
            r14.<init>()
            java.lang.String r0 = "Expecting menu, got "
            r14.append(r0)
            r14.append(r15)
            java.lang.String r14 = r14.toString()
            r13.<init>(r14)
            throw r13
        L35:
            int r15 = r13.next()
            if (r15 != r3) goto L9
        L3b:
            r4 = 0
            r5 = 0
            r6 = r4
            r7 = r6
            r8 = r5
        L40:
            if (r6 != 0) goto Lc6
            if (r15 == r3) goto Lbe
            java.lang.String r9 = "item"
            java.lang.String r10 = "group"
            if (r15 == r1) goto L8e
            r11 = 3
            if (r15 == r11) goto L4f
            goto Lb9
        L4f:
            java.lang.String r15 = r13.getName()
            if (r7 == 0) goto L5e
            boolean r11 = r15.equals(r8)
            if (r11 == 0) goto L5e
            r7 = r4
            r8 = r5
            goto Lb9
        L5e:
            boolean r10 = r15.equals(r10)
            if (r10 == 0) goto L68
            r0.h()
            goto Lb9
        L68:
            boolean r9 = r15.equals(r9)
            if (r9 == 0) goto L86
            boolean r15 = r0.d()
            if (r15 != 0) goto Lb9
            androidx.core.view.b r15 = r0.A
            if (r15 == 0) goto L82
            boolean r15 = r15.a()
            if (r15 == 0) goto L82
            r0.b()
            goto Lb9
        L82:
            r0.a()
            goto Lb9
        L86:
            boolean r15 = r15.equals(r2)
            if (r15 == 0) goto Lb9
            r6 = r3
            goto Lb9
        L8e:
            if (r7 == 0) goto L91
            goto Lb9
        L91:
            java.lang.String r15 = r13.getName()
            boolean r10 = r15.equals(r10)
            if (r10 == 0) goto L9f
            r0.f(r14)
            goto Lb9
        L9f:
            boolean r9 = r15.equals(r9)
            if (r9 == 0) goto La9
            r0.g(r14)
            goto Lb9
        La9:
            boolean r9 = r15.equals(r2)
            if (r9 == 0) goto Lb7
            android.view.SubMenu r15 = r0.b()
            r12.c(r13, r14, r15)
            goto Lb9
        Lb7:
            r8 = r15
            r7 = r3
        Lb9:
            int r15 = r13.next()
            goto L40
        Lbe:
            java.lang.RuntimeException r13 = new java.lang.RuntimeException
            java.lang.String r14 = "Unexpected end of document"
            r13.<init>(r14)
            throw r13
        Lc6:
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: androidx.appcompat.view.e.c(org.xmlpull.v1.XmlPullParser, android.util.AttributeSet, android.view.Menu):void");
    }

    Object b() {
        if (this.f1212d == null) {
            this.f1212d = a(this.f1211c);
        }
        return this.f1212d;
    }

    @Override // android.view.MenuInflater
    public void inflate(int i10, Menu menu) {
        if (!(menu instanceof t1.a)) {
            super.inflate(i10, menu);
            return;
        }
        XmlResourceParser xmlResourceParser = null;
        boolean z10 = false;
        try {
            try {
                xmlResourceParser = this.f1211c.getResources().getLayout(i10);
                AttributeSet asAttributeSet = Xml.asAttributeSet(xmlResourceParser);
                if (menu instanceof androidx.appcompat.view.menu.e) {
                    androidx.appcompat.view.menu.e eVar = (androidx.appcompat.view.menu.e) menu;
                    if (eVar.F()) {
                        eVar.e0();
                        z10 = true;
                    }
                }
                c(xmlResourceParser, asAttributeSet, menu);
                if (z10) {
                    ((androidx.appcompat.view.menu.e) menu).d0();
                }
                if (xmlResourceParser != null) {
                    xmlResourceParser.close();
                }
            } catch (IOException e10) {
                throw new InflateException("Error inflating menu XML", e10);
            } catch (XmlPullParserException e11) {
                throw new InflateException("Error inflating menu XML", e11);
            }
        } catch (Throwable th2) {
            if (z10) {
                ((androidx.appcompat.view.menu.e) menu).d0();
            }
            if (xmlResourceParser != null) {
                xmlResourceParser.close();
            }
            throw th2;
        }
    }
}
