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
    static final Class[] f1163e;

    /* renamed from: f  reason: collision with root package name */
    static final Class[] f1164f;

    /* renamed from: a  reason: collision with root package name */
    final Object[] f1165a;

    /* renamed from: b  reason: collision with root package name */
    final Object[] f1166b;

    /* renamed from: c  reason: collision with root package name */
    Context f1167c;

    /* renamed from: d  reason: collision with root package name */
    private Object f1168d;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class a implements MenuItem.OnMenuItemClickListener {

        /* renamed from: c  reason: collision with root package name */
        private static final Class[] f1169c = {MenuItem.class};

        /* renamed from: a  reason: collision with root package name */
        private Object f1170a;

        /* renamed from: b  reason: collision with root package name */
        private Method f1171b;

        public a(Object obj, String str) {
            this.f1170a = obj;
            Class<?> cls = obj.getClass();
            try {
                this.f1171b = cls.getMethod(str, f1169c);
            } catch (Exception e10) {
                InflateException inflateException = new InflateException("Couldn't resolve menu item onClick handler " + str + " in class " + cls.getName());
                inflateException.initCause(e10);
                throw inflateException;
            }
        }

        @Override // android.view.MenuItem.OnMenuItemClickListener
        public boolean onMenuItemClick(MenuItem menuItem) {
            try {
                if (this.f1171b.getReturnType() == Boolean.TYPE) {
                    return ((Boolean) this.f1171b.invoke(this.f1170a, menuItem)).booleanValue();
                }
                this.f1171b.invoke(this.f1170a, menuItem);
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
        private Menu f1172a;

        /* renamed from: b  reason: collision with root package name */
        private int f1173b;

        /* renamed from: c  reason: collision with root package name */
        private int f1174c;

        /* renamed from: d  reason: collision with root package name */
        private int f1175d;

        /* renamed from: e  reason: collision with root package name */
        private int f1176e;

        /* renamed from: f  reason: collision with root package name */
        private boolean f1177f;

        /* renamed from: g  reason: collision with root package name */
        private boolean f1178g;

        /* renamed from: h  reason: collision with root package name */
        private boolean f1179h;

        /* renamed from: i  reason: collision with root package name */
        private int f1180i;

        /* renamed from: j  reason: collision with root package name */
        private int f1181j;

        /* renamed from: k  reason: collision with root package name */
        private CharSequence f1182k;

        /* renamed from: l  reason: collision with root package name */
        private CharSequence f1183l;

        /* renamed from: m  reason: collision with root package name */
        private int f1184m;

        /* renamed from: n  reason: collision with root package name */
        private char f1185n;

        /* renamed from: o  reason: collision with root package name */
        private int f1186o;

        /* renamed from: p  reason: collision with root package name */
        private char f1187p;

        /* renamed from: q  reason: collision with root package name */
        private int f1188q;

        /* renamed from: r  reason: collision with root package name */
        private int f1189r;

        /* renamed from: s  reason: collision with root package name */
        private boolean f1190s;

        /* renamed from: t  reason: collision with root package name */
        private boolean f1191t;

        /* renamed from: u  reason: collision with root package name */
        private boolean f1192u;

        /* renamed from: v  reason: collision with root package name */
        private int f1193v;

        /* renamed from: w  reason: collision with root package name */
        private int f1194w;

        /* renamed from: x  reason: collision with root package name */
        private String f1195x;

        /* renamed from: y  reason: collision with root package name */
        private String f1196y;

        /* renamed from: z  reason: collision with root package name */
        private String f1197z;

        public b(Menu menu) {
            this.f1172a = menu;
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
                Constructor<?> constructor = Class.forName(str, false, e.this.f1167c.getClassLoader()).getConstructor(clsArr);
                constructor.setAccessible(true);
                return constructor.newInstance(objArr);
            } catch (Exception e10) {
                Log.w("SupportMenuInflater", "Cannot instantiate class: " + str, e10);
                return null;
            }
        }

        private void i(MenuItem menuItem) {
            boolean z10;
            MenuItem enabled = menuItem.setChecked(this.f1190s).setVisible(this.f1191t).setEnabled(this.f1192u);
            boolean z11 = false;
            if (this.f1189r >= 1) {
                z10 = true;
            } else {
                z10 = false;
            }
            enabled.setCheckable(z10).setTitleCondensed(this.f1183l).setIcon(this.f1184m);
            int i10 = this.f1193v;
            if (i10 >= 0) {
                menuItem.setShowAsAction(i10);
            }
            if (this.f1197z != null) {
                if (!e.this.f1167c.isRestricted()) {
                    menuItem.setOnMenuItemClickListener(new a(e.this.b(), this.f1197z));
                } else {
                    throw new IllegalStateException("The android:onClick attribute cannot be used within a restricted context");
                }
            }
            if (this.f1189r >= 2) {
                if (menuItem instanceof androidx.appcompat.view.menu.g) {
                    ((androidx.appcompat.view.menu.g) menuItem).t(true);
                } else if (menuItem instanceof k.c) {
                    ((k.c) menuItem).h(true);
                }
            }
            String str = this.f1195x;
            if (str != null) {
                menuItem.setActionView((View) e(str, e.f1163e, e.this.f1165a));
                z11 = true;
            }
            int i11 = this.f1194w;
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
            q.b(menuItem, this.f1185n, this.f1186o);
            q.f(menuItem, this.f1187p, this.f1188q);
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
            this.f1179h = true;
            i(this.f1172a.add(this.f1173b, this.f1180i, this.f1181j, this.f1182k));
        }

        public SubMenu b() {
            this.f1179h = true;
            SubMenu addSubMenu = this.f1172a.addSubMenu(this.f1173b, this.f1180i, this.f1181j, this.f1182k);
            i(addSubMenu.getItem());
            return addSubMenu;
        }

        public boolean d() {
            return this.f1179h;
        }

        public void f(AttributeSet attributeSet) {
            TypedArray obtainStyledAttributes = e.this.f1167c.obtainStyledAttributes(attributeSet, j.f24279o1);
            this.f1173b = obtainStyledAttributes.getResourceId(j.f24289q1, 0);
            this.f1174c = obtainStyledAttributes.getInt(j.f24299s1, 0);
            this.f1175d = obtainStyledAttributes.getInt(j.f24304t1, 0);
            this.f1176e = obtainStyledAttributes.getInt(j.f24309u1, 0);
            this.f1177f = obtainStyledAttributes.getBoolean(j.f24294r1, true);
            this.f1178g = obtainStyledAttributes.getBoolean(j.f24284p1, true);
            obtainStyledAttributes.recycle();
        }

        public void g(AttributeSet attributeSet) {
            boolean z10;
            v0 u10 = v0.u(e.this.f1167c, attributeSet, j.f24314v1);
            this.f1180i = u10.n(j.f24329y1, 0);
            this.f1181j = (u10.k(j.B1, this.f1174c) & (-65536)) | (u10.k(j.C1, this.f1175d) & 65535);
            this.f1182k = u10.p(j.D1);
            this.f1183l = u10.p(j.E1);
            this.f1184m = u10.n(j.f24319w1, 0);
            this.f1185n = c(u10.o(j.F1));
            this.f1186o = u10.k(j.M1, RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT);
            this.f1187p = c(u10.o(j.G1));
            this.f1188q = u10.k(j.Q1, RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT);
            if (u10.s(j.H1)) {
                this.f1189r = u10.a(j.H1, false) ? 1 : 0;
            } else {
                this.f1189r = this.f1176e;
            }
            this.f1190s = u10.a(j.f24334z1, false);
            this.f1191t = u10.a(j.A1, this.f1177f);
            this.f1192u = u10.a(j.f24324x1, this.f1178g);
            this.f1193v = u10.k(j.R1, -1);
            this.f1197z = u10.o(j.I1);
            this.f1194w = u10.n(j.J1, 0);
            this.f1195x = u10.o(j.L1);
            String o10 = u10.o(j.K1);
            this.f1196y = o10;
            if (o10 != null) {
                z10 = true;
            } else {
                z10 = false;
            }
            if (z10 && this.f1194w == 0 && this.f1195x == null) {
                this.A = (androidx.core.view.b) e(o10, e.f1164f, e.this.f1166b);
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
            this.f1179h = false;
        }

        public void h() {
            this.f1173b = 0;
            this.f1174c = 0;
            this.f1175d = 0;
            this.f1176e = 0;
            this.f1177f = true;
            this.f1178g = true;
        }
    }

    static {
        Class[] clsArr = {Context.class};
        f1163e = clsArr;
        f1164f = clsArr;
    }

    public e(Context context) {
        super(context);
        this.f1167c = context;
        Object[] objArr = {context};
        this.f1165a = objArr;
        this.f1166b = objArr;
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
        if (this.f1168d == null) {
            this.f1168d = a(this.f1167c);
        }
        return this.f1168d;
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
                xmlResourceParser = this.f1167c.getResources().getLayout(i10);
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
