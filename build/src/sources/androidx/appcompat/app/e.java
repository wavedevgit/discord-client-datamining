package androidx.appcompat.app;

import android.app.Activity;
import android.app.Dialog;
import android.app.UiModeManager;
import android.content.BroadcastReceiver;
import android.content.ComponentName;
import android.content.Context;
import android.content.ContextWrapper;
import android.content.Intent;
import android.content.IntentFilter;
import android.content.pm.ActivityInfo;
import android.content.pm.PackageManager;
import android.content.res.Configuration;
import android.content.res.Resources;
import android.content.res.TypedArray;
import android.graphics.Rect;
import android.graphics.drawable.Drawable;
import android.media.AudioManager;
import android.os.Build;
import android.os.Bundle;
import android.os.LocaleList;
import android.os.PowerManager;
import android.text.TextUtils;
import android.util.AndroidRuntimeException;
import android.util.AttributeSet;
import android.util.Log;
import android.util.TypedValue;
import android.view.ActionMode;
import android.view.KeyCharacterMap;
import android.view.KeyEvent;
import android.view.LayoutInflater;
import android.view.Menu;
import android.view.MenuInflater;
import android.view.MenuItem;
import android.view.MotionEvent;
import android.view.View;
import android.view.ViewConfiguration;
import android.view.ViewGroup;
import android.view.ViewParent;
import android.view.Window;
import android.view.WindowManager;
import android.widget.FrameLayout;
import android.widget.PopupWindow;
import android.widget.TextView;
import android.window.OnBackInvokedCallback;
import android.window.OnBackInvokedDispatcher;
import androidx.annotation.NonNull;
import androidx.appcompat.view.ActionMode;
import androidx.appcompat.view.ContextThemeWrapper;
import androidx.appcompat.view.d;
import androidx.appcompat.view.menu.e;
import androidx.appcompat.view.menu.j;
import androidx.appcompat.widget.ActionBarContextView;
import androidx.appcompat.widget.ContentFrameLayout;
import androidx.appcompat.widget.Toolbar;
import androidx.appcompat.widget.f1;
import androidx.appcompat.widget.g1;
import androidx.appcompat.widget.v0;
import androidx.appcompat.widget.y;
import androidx.collection.SimpleArrayMap;
import androidx.core.os.LocaleListCompat;
import androidx.core.view.WindowInsetsCompat;
import androidx.core.view.h0;
import androidx.core.view.k;
import androidx.core.view.r0;
import androidx.core.view.t0;
import androidx.lifecycle.Lifecycle;
import androidx.lifecycle.LifecycleOwner;
import androidx.recyclerview.widget.RecyclerView;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import java.util.List;
import java.util.Locale;
import java.util.Objects;
import org.webrtc.MediaStreamTrack;
import org.xmlpull.v1.XmlPullParser;
import q1.j;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class e extends AppCompatDelegate implements e.a, LayoutInflater.Factory2 {

    /* renamed from: u0  reason: collision with root package name */
    private static final SimpleArrayMap f1437u0 = new SimpleArrayMap();

    /* renamed from: v0  reason: collision with root package name */
    private static final boolean f1438v0 = false;

    /* renamed from: w0  reason: collision with root package name */
    private static final int[] f1439w0 = {16842836};

    /* renamed from: x0  reason: collision with root package name */
    private static final boolean f1440x0 = !"robolectric".equals(Build.FINGERPRINT);
    MenuInflater A;
    private CharSequence B;
    private y C;
    private h D;
    private t E;
    ActionMode F;
    ActionBarContextView G;
    PopupWindow H;
    Runnable I;
    r0 J;
    private boolean K;
    private boolean L;
    ViewGroup M;
    private TextView N;
    private View O;
    private boolean P;
    private boolean Q;
    boolean R;
    boolean S;
    boolean T;
    boolean U;
    boolean V;
    private boolean W;
    private s[] X;
    private s Y;
    private boolean Z;

    /* renamed from: a0  reason: collision with root package name */
    private boolean f1441a0;

    /* renamed from: b0  reason: collision with root package name */
    private boolean f1442b0;

    /* renamed from: c0  reason: collision with root package name */
    boolean f1443c0;

    /* renamed from: d0  reason: collision with root package name */
    private Configuration f1444d0;

    /* renamed from: e0  reason: collision with root package name */
    private int f1445e0;

    /* renamed from: f0  reason: collision with root package name */
    private int f1446f0;

    /* renamed from: g0  reason: collision with root package name */
    private int f1447g0;

    /* renamed from: h0  reason: collision with root package name */
    private boolean f1448h0;

    /* renamed from: i0  reason: collision with root package name */
    private p f1449i0;

    /* renamed from: j0  reason: collision with root package name */
    private p f1450j0;

    /* renamed from: k0  reason: collision with root package name */
    boolean f1451k0;

    /* renamed from: l0  reason: collision with root package name */
    int f1452l0;

    /* renamed from: m0  reason: collision with root package name */
    private final Runnable f1453m0;

    /* renamed from: n0  reason: collision with root package name */
    private boolean f1454n0;

    /* renamed from: o0  reason: collision with root package name */
    private Rect f1455o0;

    /* renamed from: p0  reason: collision with root package name */
    private Rect f1456p0;

    /* renamed from: q0  reason: collision with root package name */
    private androidx.appcompat.app.n f1457q0;

    /* renamed from: r0  reason: collision with root package name */
    private androidx.appcompat.app.p f1458r0;

    /* renamed from: s0  reason: collision with root package name */
    private OnBackInvokedDispatcher f1459s0;

    /* renamed from: t0  reason: collision with root package name */
    private OnBackInvokedCallback f1460t0;

    /* renamed from: u  reason: collision with root package name */
    final Object f1461u;

    /* renamed from: v  reason: collision with root package name */
    final Context f1462v;

    /* renamed from: w  reason: collision with root package name */
    Window f1463w;

    /* renamed from: x  reason: collision with root package name */
    private n f1464x;

    /* renamed from: y  reason: collision with root package name */
    final androidx.appcompat.app.b f1465y;

    /* renamed from: z  reason: collision with root package name */
    ActionBar f1466z;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    class a implements Runnable {
        a() {
        }

        @Override // java.lang.Runnable
        public void run() {
            e eVar = e.this;
            if ((eVar.f1452l0 & 1) != 0) {
                eVar.l0(0);
            }
            e eVar2 = e.this;
            if ((eVar2.f1452l0 & RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT) != 0) {
                eVar2.l0(108);
            }
            e eVar3 = e.this;
            eVar3.f1451k0 = false;
            eVar3.f1452l0 = 0;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class b implements androidx.core.view.v {
        b() {
        }

        @Override // androidx.core.view.v
        public WindowInsetsCompat a(View view, WindowInsetsCompat windowInsetsCompat) {
            int q10 = windowInsetsCompat.q();
            int h12 = e.this.h1(windowInsetsCompat, null);
            if (q10 != h12) {
                windowInsetsCompat = windowInsetsCompat.v(windowInsetsCompat.o(), h12, windowInsetsCompat.p(), windowInsetsCompat.n());
            }
            return h0.Z(view, windowInsetsCompat);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class c implements ContentFrameLayout.a {
        c() {
        }

        @Override // androidx.appcompat.widget.ContentFrameLayout.a
        public void a() {
        }

        @Override // androidx.appcompat.widget.ContentFrameLayout.a
        public void onDetachedFromWindow() {
            e.this.j0();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class d implements Runnable {

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        class a extends t0 {
            a() {
            }

            @Override // androidx.core.view.s0
            public void b(View view) {
                e.this.G.setAlpha(1.0f);
                e.this.J.g(null);
                e.this.J = null;
            }

            @Override // androidx.core.view.t0, androidx.core.view.s0
            public void c(View view) {
                e.this.G.setVisibility(0);
            }
        }

        d() {
        }

        @Override // java.lang.Runnable
        public void run() {
            e eVar = e.this;
            eVar.H.showAtLocation(eVar.G, 55, 0, 0);
            e.this.m0();
            if (e.this.X0()) {
                e.this.G.setAlpha(0.0f);
                e eVar2 = e.this;
                eVar2.J = h0.e(eVar2.G).b(1.0f);
                e.this.J.g(new a());
                return;
            }
            e.this.G.setAlpha(1.0f);
            e.this.G.setVisibility(0);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* renamed from: androidx.appcompat.app.e$e  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class C0017e extends t0 {
        C0017e() {
        }

        @Override // androidx.core.view.s0
        public void b(View view) {
            e.this.G.setAlpha(1.0f);
            e.this.J.g(null);
            e.this.J = null;
        }

        @Override // androidx.core.view.t0, androidx.core.view.s0
        public void c(View view) {
            e.this.G.setVisibility(0);
            if (e.this.G.getParent() instanceof View) {
                h0.k0((View) e.this.G.getParent());
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private class f implements ActionBarDrawerToggle$Delegate {
        f() {
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public interface g {
        boolean a(int i10);

        View onCreatePanelView(int i10);
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public final class h implements j.a {
        h() {
        }

        @Override // androidx.appcompat.view.menu.j.a
        public void a(androidx.appcompat.view.menu.e eVar, boolean z10) {
            e.this.c0(eVar);
        }

        @Override // androidx.appcompat.view.menu.j.a
        public boolean b(androidx.appcompat.view.menu.e eVar) {
            Window.Callback y02 = e.this.y0();
            if (y02 != null) {
                y02.onMenuOpened(108, eVar);
                return true;
            }
            return true;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class i implements ActionMode.Callback {

        /* renamed from: a  reason: collision with root package name */
        private ActionMode.Callback f1475a;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        class a extends t0 {
            a() {
            }

            @Override // androidx.core.view.s0
            public void b(View view) {
                e.this.G.setVisibility(8);
                e eVar = e.this;
                PopupWindow popupWindow = eVar.H;
                if (popupWindow != null) {
                    popupWindow.dismiss();
                } else if (eVar.G.getParent() instanceof View) {
                    h0.k0((View) e.this.G.getParent());
                }
                e.this.G.k();
                e.this.J.g(null);
                e eVar2 = e.this;
                eVar2.J = null;
                h0.k0(eVar2.M);
            }
        }

        public i(ActionMode.Callback callback) {
            this.f1475a = callback;
        }

        @Override // androidx.appcompat.view.ActionMode.Callback
        public void a(ActionMode actionMode) {
            this.f1475a.a(actionMode);
            e eVar = e.this;
            if (eVar.H != null) {
                eVar.f1463w.getDecorView().removeCallbacks(e.this.I);
            }
            e eVar2 = e.this;
            if (eVar2.G != null) {
                eVar2.m0();
                e eVar3 = e.this;
                eVar3.J = h0.e(eVar3.G).b(0.0f);
                e.this.J.g(new a());
            }
            e eVar4 = e.this;
            androidx.appcompat.app.b bVar = eVar4.f1465y;
            if (bVar != null) {
                bVar.onSupportActionModeFinished(eVar4.F);
            }
            e eVar5 = e.this;
            eVar5.F = null;
            h0.k0(eVar5.M);
            e.this.f1();
        }

        @Override // androidx.appcompat.view.ActionMode.Callback
        public boolean b(ActionMode actionMode, Menu menu) {
            return this.f1475a.b(actionMode, menu);
        }

        @Override // androidx.appcompat.view.ActionMode.Callback
        public boolean c(ActionMode actionMode, MenuItem menuItem) {
            return this.f1475a.c(actionMode, menuItem);
        }

        @Override // androidx.appcompat.view.ActionMode.Callback
        public boolean d(ActionMode actionMode, Menu menu) {
            h0.k0(e.this.M);
            return this.f1475a.d(actionMode, menu);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static class j {
        static boolean a(PowerManager powerManager) {
            return powerManager.isPowerSaveMode();
        }

        static String b(Locale locale) {
            return locale.toLanguageTag();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class k {
        static void a(@NonNull Configuration configuration, @NonNull Configuration configuration2, @NonNull Configuration configuration3) {
            LocaleList locales = configuration.getLocales();
            LocaleList locales2 = configuration2.getLocales();
            if (!locales.equals(locales2)) {
                configuration3.setLocales(locales2);
                configuration3.locale = configuration2.locale;
            }
        }

        static LocaleListCompat b(Configuration configuration) {
            return LocaleListCompat.b(configuration.getLocales().toLanguageTags());
        }

        public static void c(LocaleListCompat localeListCompat) {
            LocaleList.setDefault(LocaleList.forLanguageTags(localeListCompat.g()));
        }

        static void d(Configuration configuration, LocaleListCompat localeListCompat) {
            configuration.setLocales(LocaleList.forLanguageTags(localeListCompat.g()));
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class l {
        static void a(Configuration configuration, Configuration configuration2, Configuration configuration3) {
            int i10;
            int i11;
            int i12;
            int i13;
            int i14;
            int i15;
            i10 = configuration.colorMode;
            int i16 = i10 & 3;
            i11 = configuration2.colorMode;
            if (i16 != (i11 & 3)) {
                i15 = configuration3.colorMode;
                configuration3.colorMode = i15 | (i11 & 3);
            }
            i12 = configuration.colorMode;
            int i17 = i12 & 12;
            i13 = configuration2.colorMode;
            if (i17 != (i13 & 12)) {
                i14 = configuration3.colorMode;
                configuration3.colorMode = i14 | (i13 & 12);
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class m {
        static OnBackInvokedDispatcher a(Activity activity) {
            return activity.getOnBackInvokedDispatcher();
        }

        static OnBackInvokedCallback b(Object obj, final e eVar) {
            Objects.requireNonNull(eVar);
            OnBackInvokedCallback onBackInvokedCallback = new OnBackInvokedCallback() { // from class: androidx.appcompat.app.j
                public final void onBackInvoked() {
                    e.this.G0();
                }
            };
            androidx.appcompat.app.i.a(obj).registerOnBackInvokedCallback(1000000, onBackInvokedCallback);
            return onBackInvokedCallback;
        }

        static void c(Object obj, Object obj2) {
            androidx.appcompat.app.i.a(obj).unregisterOnBackInvokedCallback(androidx.appcompat.app.h.a(obj2));
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class n extends androidx.appcompat.view.g {

        /* renamed from: e  reason: collision with root package name */
        private g f1478e;

        /* renamed from: i  reason: collision with root package name */
        private boolean f1479i;

        /* renamed from: o  reason: collision with root package name */
        private boolean f1480o;

        /* renamed from: p  reason: collision with root package name */
        private boolean f1481p;

        n(Window.Callback callback) {
            super(callback);
        }

        public boolean b(Window.Callback callback, KeyEvent keyEvent) {
            try {
                this.f1480o = true;
                return callback.dispatchKeyEvent(keyEvent);
            } finally {
                this.f1480o = false;
            }
        }

        public void c(Window.Callback callback) {
            try {
                this.f1479i = true;
                callback.onContentChanged();
            } finally {
                this.f1479i = false;
            }
        }

        public void d(Window.Callback callback, int i10, Menu menu) {
            try {
                this.f1481p = true;
                callback.onPanelClosed(i10, menu);
            } finally {
                this.f1481p = false;
            }
        }

        @Override // androidx.appcompat.view.g, android.view.Window.Callback
        public boolean dispatchKeyEvent(KeyEvent keyEvent) {
            if (this.f1480o) {
                return a().dispatchKeyEvent(keyEvent);
            }
            if (!e.this.k0(keyEvent) && !super.dispatchKeyEvent(keyEvent)) {
                return false;
            }
            return true;
        }

        @Override // androidx.appcompat.view.g, android.view.Window.Callback
        public boolean dispatchKeyShortcutEvent(KeyEvent keyEvent) {
            if (!super.dispatchKeyShortcutEvent(keyEvent) && !e.this.J0(keyEvent.getKeyCode(), keyEvent)) {
                return false;
            }
            return true;
        }

        void e(g gVar) {
            this.f1478e = gVar;
        }

        final android.view.ActionMode f(ActionMode.Callback callback) {
            d.a aVar = new d.a(e.this.f1462v, callback);
            androidx.appcompat.view.ActionMode S = e.this.S(aVar);
            if (S != null) {
                return aVar.e(S);
            }
            return null;
        }

        @Override // android.view.Window.Callback
        public void onContentChanged() {
            if (this.f1479i) {
                a().onContentChanged();
            }
        }

        @Override // androidx.appcompat.view.g, android.view.Window.Callback
        public boolean onCreatePanelMenu(int i10, Menu menu) {
            if (i10 == 0 && !(menu instanceof androidx.appcompat.view.menu.e)) {
                return false;
            }
            return super.onCreatePanelMenu(i10, menu);
        }

        @Override // androidx.appcompat.view.g, android.view.Window.Callback
        public View onCreatePanelView(int i10) {
            View onCreatePanelView;
            g gVar = this.f1478e;
            if (gVar != null && (onCreatePanelView = gVar.onCreatePanelView(i10)) != null) {
                return onCreatePanelView;
            }
            return super.onCreatePanelView(i10);
        }

        @Override // androidx.appcompat.view.g, android.view.Window.Callback
        public boolean onMenuOpened(int i10, Menu menu) {
            super.onMenuOpened(i10, menu);
            e.this.M0(i10);
            return true;
        }

        @Override // androidx.appcompat.view.g, android.view.Window.Callback
        public void onPanelClosed(int i10, Menu menu) {
            if (this.f1481p) {
                a().onPanelClosed(i10, menu);
                return;
            }
            super.onPanelClosed(i10, menu);
            e.this.N0(i10);
        }

        @Override // androidx.appcompat.view.g, android.view.Window.Callback
        public boolean onPreparePanel(int i10, View view, Menu menu) {
            androidx.appcompat.view.menu.e eVar;
            if (menu instanceof androidx.appcompat.view.menu.e) {
                eVar = (androidx.appcompat.view.menu.e) menu;
            } else {
                eVar = null;
            }
            if (i10 == 0 && eVar == null) {
                return false;
            }
            boolean z10 = true;
            if (eVar != null) {
                eVar.b0(true);
            }
            g gVar = this.f1478e;
            if (gVar == null || !gVar.a(i10)) {
                z10 = false;
            }
            if (!z10) {
                z10 = super.onPreparePanel(i10, view, menu);
            }
            if (eVar != null) {
                eVar.b0(false);
            }
            return z10;
        }

        @Override // androidx.appcompat.view.g, android.view.Window.Callback
        public void onProvideKeyboardShortcuts(List list, Menu menu, int i10) {
            androidx.appcompat.view.menu.e eVar;
            s w02 = e.this.w0(0, true);
            if (w02 != null && (eVar = w02.f1500j) != null) {
                super.onProvideKeyboardShortcuts(list, eVar, i10);
            } else {
                super.onProvideKeyboardShortcuts(list, menu, i10);
            }
        }

        @Override // android.view.Window.Callback
        public android.view.ActionMode onWindowStartingActionMode(ActionMode.Callback callback) {
            return null;
        }

        @Override // androidx.appcompat.view.g, android.view.Window.Callback
        public android.view.ActionMode onWindowStartingActionMode(ActionMode.Callback callback, int i10) {
            if (e.this.E0() && i10 == 0) {
                return f(callback);
            }
            return super.onWindowStartingActionMode(callback, i10);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class o extends p {

        /* renamed from: c  reason: collision with root package name */
        private final PowerManager f1483c;

        o(Context context) {
            super();
            this.f1483c = (PowerManager) context.getApplicationContext().getSystemService("power");
        }

        @Override // androidx.appcompat.app.e.p
        IntentFilter b() {
            IntentFilter intentFilter = new IntentFilter();
            intentFilter.addAction("android.os.action.POWER_SAVE_MODE_CHANGED");
            return intentFilter;
        }

        @Override // androidx.appcompat.app.e.p
        public int c() {
            if (j.a(this.f1483c)) {
                return 2;
            }
            return 1;
        }

        @Override // androidx.appcompat.app.e.p
        public void d() {
            e.this.f();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public abstract class p {

        /* renamed from: a  reason: collision with root package name */
        private BroadcastReceiver f1485a;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public class a extends BroadcastReceiver {
            a() {
            }

            @Override // android.content.BroadcastReceiver
            public void onReceive(Context context, Intent intent) {
                p.this.d();
            }
        }

        p() {
        }

        void a() {
            BroadcastReceiver broadcastReceiver = this.f1485a;
            if (broadcastReceiver != null) {
                try {
                    e.this.f1462v.unregisterReceiver(broadcastReceiver);
                } catch (IllegalArgumentException unused) {
                }
                this.f1485a = null;
            }
        }

        abstract IntentFilter b();

        abstract int c();

        abstract void d();

        void e() {
            a();
            IntentFilter b10 = b();
            if (b10 != null && b10.countActions() != 0) {
                if (this.f1485a == null) {
                    this.f1485a = new a();
                }
                e.this.f1462v.registerReceiver(this.f1485a, b10);
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class q extends p {

        /* renamed from: c  reason: collision with root package name */
        private final u f1488c;

        q(u uVar) {
            super();
            this.f1488c = uVar;
        }

        @Override // androidx.appcompat.app.e.p
        IntentFilter b() {
            IntentFilter intentFilter = new IntentFilter();
            intentFilter.addAction("android.intent.action.TIME_SET");
            intentFilter.addAction("android.intent.action.TIMEZONE_CHANGED");
            intentFilter.addAction("android.intent.action.TIME_TICK");
            return intentFilter;
        }

        @Override // androidx.appcompat.app.e.p
        public int c() {
            if (this.f1488c.d()) {
                return 2;
            }
            return 1;
        }

        @Override // androidx.appcompat.app.e.p
        public void d() {
            e.this.f();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public class r extends ContentFrameLayout {
        public r(Context context) {
            super(context);
        }

        private boolean b(int i10, int i11) {
            if (i10 >= -5 && i11 >= -5 && i10 <= getWidth() + 5 && i11 <= getHeight() + 5) {
                return false;
            }
            return true;
        }

        @Override // android.view.ViewGroup, android.view.View
        public boolean dispatchKeyEvent(KeyEvent keyEvent) {
            if (!e.this.k0(keyEvent) && !super.dispatchKeyEvent(keyEvent)) {
                return false;
            }
            return true;
        }

        @Override // android.view.ViewGroup
        public boolean onInterceptTouchEvent(MotionEvent motionEvent) {
            if (motionEvent.getAction() == 0 && b((int) motionEvent.getX(), (int) motionEvent.getY())) {
                e.this.e0(0);
                return true;
            }
            return super.onInterceptTouchEvent(motionEvent);
        }

        @Override // android.view.View
        public void setBackgroundResource(int i10) {
            setBackgroundDrawable(g.a.b(getContext(), i10));
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class s {

        /* renamed from: a  reason: collision with root package name */
        int f1491a;

        /* renamed from: b  reason: collision with root package name */
        int f1492b;

        /* renamed from: c  reason: collision with root package name */
        int f1493c;

        /* renamed from: d  reason: collision with root package name */
        int f1494d;

        /* renamed from: e  reason: collision with root package name */
        int f1495e;

        /* renamed from: f  reason: collision with root package name */
        int f1496f;

        /* renamed from: g  reason: collision with root package name */
        ViewGroup f1497g;

        /* renamed from: h  reason: collision with root package name */
        View f1498h;

        /* renamed from: i  reason: collision with root package name */
        View f1499i;

        /* renamed from: j  reason: collision with root package name */
        androidx.appcompat.view.menu.e f1500j;

        /* renamed from: k  reason: collision with root package name */
        androidx.appcompat.view.menu.c f1501k;

        /* renamed from: l  reason: collision with root package name */
        Context f1502l;

        /* renamed from: m  reason: collision with root package name */
        boolean f1503m;

        /* renamed from: n  reason: collision with root package name */
        boolean f1504n;

        /* renamed from: o  reason: collision with root package name */
        boolean f1505o;

        /* renamed from: p  reason: collision with root package name */
        public boolean f1506p;

        /* renamed from: q  reason: collision with root package name */
        boolean f1507q = false;

        /* renamed from: r  reason: collision with root package name */
        boolean f1508r;

        /* renamed from: s  reason: collision with root package name */
        Bundle f1509s;

        s(int i10) {
            this.f1491a = i10;
        }

        androidx.appcompat.view.menu.k a(j.a aVar) {
            if (this.f1500j == null) {
                return null;
            }
            if (this.f1501k == null) {
                androidx.appcompat.view.menu.c cVar = new androidx.appcompat.view.menu.c(this.f1502l, f.g.f22307j);
                this.f1501k = cVar;
                cVar.c(aVar);
                this.f1500j.b(this.f1501k);
            }
            return this.f1501k.j(this.f1497g);
        }

        public boolean b() {
            if (this.f1498h == null) {
                return false;
            }
            if (this.f1499i == null && this.f1501k.i().getCount() <= 0) {
                return false;
            }
            return true;
        }

        void c(androidx.appcompat.view.menu.e eVar) {
            androidx.appcompat.view.menu.c cVar;
            androidx.appcompat.view.menu.e eVar2 = this.f1500j;
            if (eVar != eVar2) {
                if (eVar2 != null) {
                    eVar2.P(this.f1501k);
                }
                this.f1500j = eVar;
                if (eVar != null && (cVar = this.f1501k) != null) {
                    eVar.b(cVar);
                }
            }
        }

        void d(Context context) {
            TypedValue typedValue = new TypedValue();
            Resources.Theme newTheme = context.getResources().newTheme();
            newTheme.setTo(context.getTheme());
            newTheme.resolveAttribute(f.a.f22198a, typedValue, true);
            int i10 = typedValue.resourceId;
            if (i10 != 0) {
                newTheme.applyStyle(i10, true);
            }
            newTheme.resolveAttribute(f.a.D, typedValue, true);
            int i11 = typedValue.resourceId;
            if (i11 != 0) {
                newTheme.applyStyle(i11, true);
            } else {
                newTheme.applyStyle(f.i.f22333b, true);
            }
            ContextThemeWrapper contextThemeWrapper = new ContextThemeWrapper(context, 0);
            contextThemeWrapper.getTheme().setTo(newTheme);
            this.f1502l = contextThemeWrapper;
            TypedArray obtainStyledAttributes = contextThemeWrapper.obtainStyledAttributes(f.j.f22457y0);
            this.f1492b = obtainStyledAttributes.getResourceId(f.j.B0, 0);
            this.f1496f = obtainStyledAttributes.getResourceId(f.j.A0, 0);
            obtainStyledAttributes.recycle();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public final class t implements j.a {
        t() {
        }

        @Override // androidx.appcompat.view.menu.j.a
        public void a(androidx.appcompat.view.menu.e eVar, boolean z10) {
            boolean z11;
            androidx.appcompat.view.menu.e D = eVar.D();
            if (D != eVar) {
                z11 = true;
            } else {
                z11 = false;
            }
            e eVar2 = e.this;
            if (z11) {
                eVar = D;
            }
            s p02 = eVar2.p0(eVar);
            if (p02 != null) {
                if (z11) {
                    e.this.b0(p02.f1491a, p02, D);
                    e.this.f0(p02, true);
                    return;
                }
                e.this.f0(p02, z10);
            }
        }

        @Override // androidx.appcompat.view.menu.j.a
        public boolean b(androidx.appcompat.view.menu.e eVar) {
            Window.Callback y02;
            if (eVar == eVar.D()) {
                e eVar2 = e.this;
                if (eVar2.R && (y02 = eVar2.y0()) != null && !e.this.f1443c0) {
                    y02.onMenuOpened(108, eVar);
                    return true;
                }
                return true;
            }
            return true;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public e(Activity activity, androidx.appcompat.app.b bVar) {
        this(activity, null, bVar, activity);
    }

    private boolean A0(s sVar) {
        View view = sVar.f1499i;
        if (view != null) {
            sVar.f1498h = view;
            return true;
        } else if (sVar.f1500j == null) {
            return false;
        } else {
            if (this.E == null) {
                this.E = new t();
            }
            View view2 = (View) sVar.a(this.E);
            sVar.f1498h = view2;
            if (view2 != null) {
                return true;
            }
            return false;
        }
    }

    private boolean B0(s sVar) {
        sVar.d(r0());
        sVar.f1497g = new r(sVar.f1502l);
        sVar.f1493c = 81;
        return true;
    }

    private boolean C0(s sVar) {
        Resources.Theme theme;
        Context context = this.f1462v;
        int i10 = sVar.f1491a;
        if ((i10 == 0 || i10 == 108) && this.C != null) {
            TypedValue typedValue = new TypedValue();
            Resources.Theme theme2 = context.getTheme();
            theme2.resolveAttribute(f.a.f22201d, typedValue, true);
            if (typedValue.resourceId != 0) {
                theme = context.getResources().newTheme();
                theme.setTo(theme2);
                theme.applyStyle(typedValue.resourceId, true);
                theme.resolveAttribute(f.a.f22202e, typedValue, true);
            } else {
                theme2.resolveAttribute(f.a.f22202e, typedValue, true);
                theme = null;
            }
            if (typedValue.resourceId != 0) {
                if (theme == null) {
                    theme = context.getResources().newTheme();
                    theme.setTo(theme2);
                }
                theme.applyStyle(typedValue.resourceId, true);
            }
            if (theme != null) {
                ContextThemeWrapper contextThemeWrapper = new ContextThemeWrapper(context, 0);
                contextThemeWrapper.getTheme().setTo(theme);
                context = contextThemeWrapper;
            }
        }
        androidx.appcompat.view.menu.e eVar = new androidx.appcompat.view.menu.e(context);
        eVar.S(this);
        sVar.c(eVar);
        return true;
    }

    private void D0(int i10) {
        this.f1452l0 = (1 << i10) | this.f1452l0;
        if (!this.f1451k0) {
            h0.f0(this.f1463w.getDecorView(), this.f1453m0);
            this.f1451k0 = true;
        }
    }

    private boolean I0(int i10, KeyEvent keyEvent) {
        if (keyEvent.getRepeatCount() == 0) {
            s w02 = w0(i10, true);
            if (!w02.f1505o) {
                return S0(w02, keyEvent);
            }
            return false;
        }
        return false;
    }

    private boolean L0(int i10, KeyEvent keyEvent) {
        boolean z10;
        y yVar;
        if (this.F != null) {
            return false;
        }
        boolean z11 = true;
        s w02 = w0(i10, true);
        if (i10 == 0 && (yVar = this.C) != null && yVar.a() && !ViewConfiguration.get(this.f1462v).hasPermanentMenuKey()) {
            if (!this.C.e()) {
                if (!this.f1443c0 && S0(w02, keyEvent)) {
                    z11 = this.C.c();
                }
                z11 = false;
            } else {
                z11 = this.C.b();
            }
        } else {
            boolean z12 = w02.f1505o;
            if (!z12 && !w02.f1504n) {
                if (w02.f1503m) {
                    if (w02.f1508r) {
                        w02.f1503m = false;
                        z10 = S0(w02, keyEvent);
                    } else {
                        z10 = true;
                    }
                    if (z10) {
                        P0(w02, keyEvent);
                    }
                }
                z11 = false;
            } else {
                f0(w02, true);
                z11 = z12;
            }
        }
        if (z11) {
            AudioManager audioManager = (AudioManager) this.f1462v.getApplicationContext().getSystemService(MediaStreamTrack.AUDIO_TRACK_KIND);
            if (audioManager != null) {
                audioManager.playSoundEffect(0);
                return z11;
            }
            Log.w("AppCompatDelegate", "Couldn't get audio manager");
        }
        return z11;
    }

    /* JADX WARN: Removed duplicated region for block: B:64:0x00ef  */
    /* JADX WARN: Removed duplicated region for block: B:70:? A[RETURN, SYNTHETIC] */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private void P0(androidx.appcompat.app.e.s r12, android.view.KeyEvent r13) {
        /*
            Method dump skipped, instructions count: 246
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: androidx.appcompat.app.e.P0(androidx.appcompat.app.e$s, android.view.KeyEvent):void");
    }

    private boolean R0(s sVar, int i10, KeyEvent keyEvent, int i11) {
        androidx.appcompat.view.menu.e eVar;
        boolean z10 = false;
        if (keyEvent.isSystem()) {
            return false;
        }
        if ((sVar.f1503m || S0(sVar, keyEvent)) && (eVar = sVar.f1500j) != null) {
            z10 = eVar.performShortcut(i10, keyEvent, i11);
        }
        if (z10 && (i11 & 1) == 0 && this.C == null) {
            f0(sVar, true);
        }
        return z10;
    }

    private boolean S0(s sVar, KeyEvent keyEvent) {
        boolean z10;
        y yVar;
        int i10;
        boolean z11;
        y yVar2;
        y yVar3;
        if (this.f1443c0) {
            return false;
        }
        if (sVar.f1503m) {
            return true;
        }
        s sVar2 = this.Y;
        if (sVar2 != null && sVar2 != sVar) {
            f0(sVar2, false);
        }
        Window.Callback y02 = y0();
        if (y02 != null) {
            sVar.f1499i = y02.onCreatePanelView(sVar.f1491a);
        }
        int i11 = sVar.f1491a;
        if (i11 != 0 && i11 != 108) {
            z10 = false;
        } else {
            z10 = true;
        }
        if (z10 && (yVar3 = this.C) != null) {
            yVar3.f();
        }
        if (sVar.f1499i == null && (!z10 || !(Q0() instanceof androidx.appcompat.app.s))) {
            androidx.appcompat.view.menu.e eVar = sVar.f1500j;
            if (eVar == null || sVar.f1508r) {
                if (eVar == null && (!C0(sVar) || sVar.f1500j == null)) {
                    return false;
                }
                if (z10 && this.C != null) {
                    if (this.D == null) {
                        this.D = new h();
                    }
                    this.C.d(sVar.f1500j, this.D);
                }
                sVar.f1500j.e0();
                if (!y02.onCreatePanelMenu(sVar.f1491a, sVar.f1500j)) {
                    sVar.c(null);
                    if (z10 && (yVar = this.C) != null) {
                        yVar.d(null, this.D);
                    }
                    return false;
                }
                sVar.f1508r = false;
            }
            sVar.f1500j.e0();
            Bundle bundle = sVar.f1509s;
            if (bundle != null) {
                sVar.f1500j.Q(bundle);
                sVar.f1509s = null;
            }
            if (!y02.onPreparePanel(0, sVar.f1499i, sVar.f1500j)) {
                if (z10 && (yVar2 = this.C) != null) {
                    yVar2.d(null, this.D);
                }
                sVar.f1500j.d0();
                return false;
            }
            if (keyEvent != null) {
                i10 = keyEvent.getDeviceId();
            } else {
                i10 = -1;
            }
            if (KeyCharacterMap.load(i10).getKeyboardType() != 1) {
                z11 = true;
            } else {
                z11 = false;
            }
            sVar.f1506p = z11;
            sVar.f1500j.setQwertyMode(z11);
            sVar.f1500j.d0();
        }
        sVar.f1503m = true;
        sVar.f1504n = false;
        this.Y = sVar;
        return true;
    }

    private void T0(boolean z10) {
        y yVar = this.C;
        if (yVar != null && yVar.a() && (!ViewConfiguration.get(this.f1462v).hasPermanentMenuKey() || this.C.g())) {
            Window.Callback y02 = y0();
            if (this.C.e() && z10) {
                this.C.b();
                if (!this.f1443c0) {
                    y02.onPanelClosed(108, w0(0, true).f1500j);
                    return;
                }
                return;
            } else if (y02 != null && !this.f1443c0) {
                if (this.f1451k0 && (this.f1452l0 & 1) != 0) {
                    this.f1463w.getDecorView().removeCallbacks(this.f1453m0);
                    this.f1453m0.run();
                }
                s w02 = w0(0, true);
                androidx.appcompat.view.menu.e eVar = w02.f1500j;
                if (eVar != null && !w02.f1508r && y02.onPreparePanel(0, w02.f1499i, eVar)) {
                    y02.onMenuOpened(108, w02.f1500j);
                    this.C.c();
                    return;
                }
                return;
            } else {
                return;
            }
        }
        s w03 = w0(0, true);
        w03.f1507q = true;
        f0(w03, false);
        P0(w03, null);
    }

    private int U0(int i10) {
        if (i10 == 8) {
            Log.i("AppCompatDelegate", "You should now use the AppCompatDelegate.FEATURE_SUPPORT_ACTION_BAR id when requesting this feature.");
            return 108;
        } else if (i10 == 9) {
            Log.i("AppCompatDelegate", "You should now use the AppCompatDelegate.FEATURE_SUPPORT_ACTION_BAR_OVERLAY id when requesting this feature.");
            return 109;
        } else {
            return i10;
        }
    }

    private boolean V(boolean z10) {
        return W(z10, true);
    }

    private boolean W(boolean z10, boolean z11) {
        LocaleListCompat localeListCompat;
        if (this.f1443c0) {
            return false;
        }
        int a02 = a0();
        int F0 = F0(this.f1462v, a02);
        if (Build.VERSION.SDK_INT < 33) {
            localeListCompat = Z(this.f1462v);
        } else {
            localeListCompat = null;
        }
        if (!z11 && localeListCompat != null) {
            localeListCompat = v0(this.f1462v.getResources().getConfiguration());
        }
        boolean e12 = e1(F0, localeListCompat, z10);
        if (a02 == 0) {
            u0(this.f1462v).e();
        } else {
            p pVar = this.f1449i0;
            if (pVar != null) {
                pVar.a();
            }
        }
        if (a02 == 3) {
            t0(this.f1462v).e();
            return e12;
        }
        p pVar2 = this.f1450j0;
        if (pVar2 != null) {
            pVar2.a();
        }
        return e12;
    }

    private void X() {
        ContentFrameLayout contentFrameLayout = (ContentFrameLayout) this.M.findViewById(16908290);
        View decorView = this.f1463w.getDecorView();
        contentFrameLayout.a(decorView.getPaddingLeft(), decorView.getPaddingTop(), decorView.getPaddingRight(), decorView.getPaddingBottom());
        TypedArray obtainStyledAttributes = this.f1462v.obtainStyledAttributes(f.j.f22457y0);
        obtainStyledAttributes.getValue(f.j.K0, contentFrameLayout.getMinWidthMajor());
        obtainStyledAttributes.getValue(f.j.L0, contentFrameLayout.getMinWidthMinor());
        if (obtainStyledAttributes.hasValue(f.j.I0)) {
            obtainStyledAttributes.getValue(f.j.I0, contentFrameLayout.getFixedWidthMajor());
        }
        if (obtainStyledAttributes.hasValue(f.j.J0)) {
            obtainStyledAttributes.getValue(f.j.J0, contentFrameLayout.getFixedWidthMinor());
        }
        if (obtainStyledAttributes.hasValue(f.j.G0)) {
            obtainStyledAttributes.getValue(f.j.G0, contentFrameLayout.getFixedHeightMajor());
        }
        if (obtainStyledAttributes.hasValue(f.j.H0)) {
            obtainStyledAttributes.getValue(f.j.H0, contentFrameLayout.getFixedHeightMinor());
        }
        obtainStyledAttributes.recycle();
        contentFrameLayout.requestLayout();
    }

    private void Y(Window window) {
        if (this.f1463w == null) {
            Window.Callback callback = window.getCallback();
            if (!(callback instanceof n)) {
                n nVar = new n(callback);
                this.f1464x = nVar;
                window.setCallback(nVar);
                v0 u10 = v0.u(this.f1462v, null, f1439w0);
                Drawable h10 = u10.h(0);
                if (h10 != null) {
                    window.setBackgroundDrawable(h10);
                }
                u10.x();
                this.f1463w = window;
                if (Build.VERSION.SDK_INT >= 33 && this.f1459s0 == null) {
                    O(null);
                    return;
                }
                return;
            }
            throw new IllegalStateException("AppCompat has already installed itself into the Window");
        }
        throw new IllegalStateException("AppCompat has already installed itself into the Window");
    }

    private boolean Y0(ViewParent viewParent) {
        if (viewParent == null) {
            return false;
        }
        View decorView = this.f1463w.getDecorView();
        while (viewParent != null) {
            if (viewParent == decorView || !(viewParent instanceof View) || ((View) viewParent).isAttachedToWindow()) {
                return false;
            }
            viewParent = viewParent.getParent();
        }
        return true;
    }

    private int a0() {
        int i10 = this.f1445e0;
        if (i10 != -100) {
            return i10;
        }
        return AppCompatDelegate.o();
    }

    private void b1() {
        if (!this.L) {
            return;
        }
        throw new AndroidRuntimeException("Window feature must be requested before adding content");
    }

    private AppCompatActivity c1() {
        for (Context context = this.f1462v; context != null; context = ((ContextWrapper) context).getBaseContext()) {
            if (context instanceof AppCompatActivity) {
                return (AppCompatActivity) context;
            }
            if (!(context instanceof ContextWrapper)) {
                break;
            }
        }
        return null;
    }

    private void d0() {
        p pVar = this.f1449i0;
        if (pVar != null) {
            pVar.a();
        }
        p pVar2 = this.f1450j0;
        if (pVar2 != null) {
            pVar2.a();
        }
    }

    private void d1(Configuration configuration) {
        Activity activity = (Activity) this.f1461u;
        if (activity instanceof LifecycleOwner) {
            if (((LifecycleOwner) activity).getLifecycle().b().d(Lifecycle.State.f4848i)) {
                activity.onConfigurationChanged(configuration);
            }
        } else if (this.f1442b0 && !this.f1443c0) {
            activity.onConfigurationChanged(configuration);
        }
    }

    /* JADX WARN: Removed duplicated region for block: B:45:0x009d  */
    /* JADX WARN: Removed duplicated region for block: B:54:0x00b9  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private boolean e1(int r11, androidx.core.os.LocaleListCompat r12, boolean r13) {
        /*
            r10 = this;
            android.content.Context r1 = r10.f1462v
            r4 = 0
            r5 = 0
            r0 = r10
            r2 = r11
            r3 = r12
            android.content.res.Configuration r11 = r0.g0(r1, r2, r3, r4, r5)
            android.content.Context r12 = r0.f1462v
            int r12 = r10.s0(r12)
            android.content.res.Configuration r1 = r0.f1444d0
            if (r1 != 0) goto L1f
            android.content.Context r1 = r0.f1462v
            android.content.res.Resources r1 = r1.getResources()
            android.content.res.Configuration r1 = r1.getConfiguration()
        L1f:
            int r4 = r1.uiMode
            r4 = r4 & 48
            int r5 = r11.uiMode
            r5 = r5 & 48
            androidx.core.os.LocaleListCompat r1 = r10.v0(r1)
            r6 = 0
            if (r3 != 0) goto L30
            r7 = r6
            goto L34
        L30:
            androidx.core.os.LocaleListCompat r7 = r10.v0(r11)
        L34:
            r8 = 0
            if (r4 == r5) goto L3a
            r4 = 512(0x200, float:7.175E-43)
            goto L3b
        L3a:
            r4 = r8
        L3b:
            if (r7 == 0) goto L45
            boolean r1 = r1.equals(r7)
            if (r1 != 0) goto L45
            r4 = r4 | 8196(0x2004, float:1.1485E-41)
        L45:
            int r1 = ~r12
            r1 = r1 & r4
            r9 = 1
            if (r1 == 0) goto L8c
            if (r13 == 0) goto L8c
            boolean r13 = r0.f1441a0
            if (r13 == 0) goto L8c
            boolean r13 = androidx.appcompat.app.e.f1440x0
            if (r13 != 0) goto L58
            boolean r13 = r0.f1442b0
            if (r13 == 0) goto L8c
        L58:
            java.lang.Object r13 = r0.f1461u
            boolean r1 = r13 instanceof android.app.Activity
            if (r1 == 0) goto L8c
            android.app.Activity r13 = (android.app.Activity) r13
            boolean r13 = r13.isChild()
            if (r13 != 0) goto L8c
            int r13 = android.os.Build.VERSION.SDK_INT
            r1 = 31
            if (r13 < r1) goto L83
            r13 = r4 & 8192(0x2000, float:1.14794E-41)
            if (r13 == 0) goto L83
            java.lang.Object r13 = r0.f1461u
            android.app.Activity r13 = (android.app.Activity) r13
            android.view.Window r13 = r13.getWindow()
            android.view.View r13 = r13.getDecorView()
            int r11 = r11.getLayoutDirection()
            r13.setLayoutDirection(r11)
        L83:
            java.lang.Object r11 = r0.f1461u
            android.app.Activity r11 = (android.app.Activity) r11
            androidx.core.app.b.u(r11)
            r11 = r9
            goto L8d
        L8c:
            r11 = r8
        L8d:
            if (r11 != 0) goto L9a
            if (r4 == 0) goto L9a
            r11 = r4 & r12
            if (r11 != r4) goto L96
            r8 = r9
        L96:
            r10.g1(r5, r7, r8, r6)
            goto L9b
        L9a:
            r9 = r11
        L9b:
            if (r9 == 0) goto Lb7
            java.lang.Object r11 = r0.f1461u
            boolean r12 = r11 instanceof androidx.appcompat.app.AppCompatActivity
            if (r12 == 0) goto Lb7
            r12 = r4 & 512(0x200, float:7.175E-43)
            if (r12 == 0) goto Lac
            androidx.appcompat.app.AppCompatActivity r11 = (androidx.appcompat.app.AppCompatActivity) r11
            r11.onNightModeChanged(r2)
        Lac:
            r11 = r4 & 4
            if (r11 == 0) goto Lb7
            java.lang.Object r11 = r0.f1461u
            androidx.appcompat.app.AppCompatActivity r11 = (androidx.appcompat.app.AppCompatActivity) r11
            r11.onLocalesChanged(r3)
        Lb7:
            if (r7 == 0) goto Lca
            android.content.Context r11 = r0.f1462v
            android.content.res.Resources r11 = r11.getResources()
            android.content.res.Configuration r11 = r11.getConfiguration()
            androidx.core.os.LocaleListCompat r11 = r10.v0(r11)
            r10.W0(r11)
        Lca:
            return r9
        */
        throw new UnsupportedOperationException("Method not decompiled: androidx.appcompat.app.e.e1(int, androidx.core.os.LocaleListCompat, boolean):boolean");
    }

    private Configuration g0(Context context, int i10, LocaleListCompat localeListCompat, Configuration configuration, boolean z10) {
        int i11;
        if (i10 != 1) {
            if (i10 != 2) {
                if (z10) {
                    i11 = 0;
                } else {
                    i11 = context.getApplicationContext().getResources().getConfiguration().uiMode & 48;
                }
            } else {
                i11 = 32;
            }
        } else {
            i11 = 16;
        }
        Configuration configuration2 = new Configuration();
        configuration2.fontScale = 0.0f;
        if (configuration != null) {
            configuration2.setTo(configuration);
        }
        configuration2.uiMode = i11 | (configuration2.uiMode & (-49));
        if (localeListCompat != null) {
            V0(configuration2, localeListCompat);
        }
        return configuration2;
    }

    private void g1(int i10, LocaleListCompat localeListCompat, boolean z10, Configuration configuration) {
        Resources resources = this.f1462v.getResources();
        Configuration configuration2 = new Configuration(resources.getConfiguration());
        if (configuration != null) {
            configuration2.updateFrom(configuration);
        }
        configuration2.uiMode = i10 | (resources.getConfiguration().uiMode & (-49));
        if (localeListCompat != null) {
            V0(configuration2, localeListCompat);
        }
        resources.updateConfiguration(configuration2, null);
        if (Build.VERSION.SDK_INT < 26) {
            androidx.appcompat.app.r.a(resources);
        }
        int i11 = this.f1446f0;
        if (i11 != 0) {
            this.f1462v.setTheme(i11);
            this.f1462v.getTheme().applyStyle(this.f1446f0, true);
        }
        if (z10 && (this.f1461u instanceof Activity)) {
            d1(configuration2);
        }
    }

    private ViewGroup h0() {
        ViewGroup viewGroup;
        Context context;
        TypedArray obtainStyledAttributes = this.f1462v.obtainStyledAttributes(f.j.f22457y0);
        if (obtainStyledAttributes.hasValue(f.j.D0)) {
            if (obtainStyledAttributes.getBoolean(f.j.M0, false)) {
                I(1);
            } else if (obtainStyledAttributes.getBoolean(f.j.D0, false)) {
                I(108);
            }
            if (obtainStyledAttributes.getBoolean(f.j.E0, false)) {
                I(109);
            }
            if (obtainStyledAttributes.getBoolean(f.j.F0, false)) {
                I(10);
            }
            this.U = obtainStyledAttributes.getBoolean(f.j.f22462z0, false);
            obtainStyledAttributes.recycle();
            o0();
            this.f1463w.getDecorView();
            LayoutInflater from = LayoutInflater.from(this.f1462v);
            if (!this.V) {
                if (this.U) {
                    viewGroup = (ViewGroup) from.inflate(f.g.f22303f, (ViewGroup) null);
                    this.S = false;
                    this.R = false;
                } else if (this.R) {
                    TypedValue typedValue = new TypedValue();
                    this.f1462v.getTheme().resolveAttribute(f.a.f22201d, typedValue, true);
                    if (typedValue.resourceId != 0) {
                        context = new ContextThemeWrapper(this.f1462v, typedValue.resourceId);
                    } else {
                        context = this.f1462v;
                    }
                    viewGroup = (ViewGroup) LayoutInflater.from(context).inflate(f.g.f22313p, (ViewGroup) null);
                    y yVar = (y) viewGroup.findViewById(f.f.f22288q);
                    this.C = yVar;
                    yVar.setWindowCallback(y0());
                    if (this.S) {
                        this.C.h(109);
                    }
                    if (this.P) {
                        this.C.h(2);
                    }
                    if (this.Q) {
                        this.C.h(5);
                    }
                } else {
                    viewGroup = null;
                }
            } else {
                viewGroup = this.T ? (ViewGroup) from.inflate(f.g.f22312o, (ViewGroup) null) : (ViewGroup) from.inflate(f.g.f22311n, (ViewGroup) null);
            }
            if (viewGroup != null) {
                h0.D0(viewGroup, new b());
                if (this.C == null) {
                    this.N = (TextView) viewGroup.findViewById(f.f.N);
                }
                g1.c(viewGroup);
                ContentFrameLayout contentFrameLayout = (ContentFrameLayout) viewGroup.findViewById(f.f.f22273b);
                ViewGroup viewGroup2 = (ViewGroup) this.f1463w.findViewById(16908290);
                if (viewGroup2 != null) {
                    while (viewGroup2.getChildCount() > 0) {
                        View childAt = viewGroup2.getChildAt(0);
                        viewGroup2.removeViewAt(0);
                        contentFrameLayout.addView(childAt);
                    }
                    viewGroup2.setId(-1);
                    contentFrameLayout.setId(16908290);
                    if (viewGroup2 instanceof FrameLayout) {
                        ((FrameLayout) viewGroup2).setForeground(null);
                    }
                }
                this.f1463w.setContentView(viewGroup);
                contentFrameLayout.setAttachListener(new c());
                return viewGroup;
            }
            throw new IllegalArgumentException("AppCompat does not support the current theme features: { windowActionBar: " + this.R + ", windowActionBarOverlay: " + this.S + ", android:windowIsFloating: " + this.U + ", windowActionModeOverlay: " + this.T + ", windowNoTitle: " + this.V + " }");
        }
        obtainStyledAttributes.recycle();
        throw new IllegalStateException("You need to use a Theme.AppCompat theme (or descendant) with this activity.");
    }

    private void i1(View view) {
        int c10;
        if ((h0.L(view) & 8192) != 0) {
            c10 = androidx.core.content.a.c(this.f1462v, f.c.f22226b);
        } else {
            c10 = androidx.core.content.a.c(this.f1462v, f.c.f22225a);
        }
        view.setBackgroundColor(c10);
    }

    private void n0() {
        if (!this.L) {
            this.M = h0();
            CharSequence x02 = x0();
            if (!TextUtils.isEmpty(x02)) {
                y yVar = this.C;
                if (yVar != null) {
                    yVar.setWindowTitle(x02);
                } else if (Q0() != null) {
                    Q0().x(x02);
                } else {
                    TextView textView = this.N;
                    if (textView != null) {
                        textView.setText(x02);
                    }
                }
            }
            X();
            O0(this.M);
            this.L = true;
            s w02 = w0(0, false);
            if (!this.f1443c0) {
                if (w02 == null || w02.f1500j == null) {
                    D0(108);
                }
            }
        }
    }

    private void o0() {
        if (this.f1463w == null) {
            Object obj = this.f1461u;
            if (obj instanceof Activity) {
                Y(((Activity) obj).getWindow());
            }
        }
        if (this.f1463w != null) {
            return;
        }
        throw new IllegalStateException("We have not been given a Window");
    }

    private static Configuration q0(Configuration configuration, Configuration configuration2) {
        Configuration configuration3 = new Configuration();
        configuration3.fontScale = 0.0f;
        if (configuration2 != null && configuration.diff(configuration2) != 0) {
            float f10 = configuration.fontScale;
            float f11 = configuration2.fontScale;
            if (f10 != f11) {
                configuration3.fontScale = f11;
            }
            int i10 = configuration.mcc;
            int i11 = configuration2.mcc;
            if (i10 != i11) {
                configuration3.mcc = i11;
            }
            int i12 = configuration.mnc;
            int i13 = configuration2.mnc;
            if (i12 != i13) {
                configuration3.mnc = i13;
            }
            int i14 = Build.VERSION.SDK_INT;
            k.a(configuration, configuration2, configuration3);
            int i15 = configuration.touchscreen;
            int i16 = configuration2.touchscreen;
            if (i15 != i16) {
                configuration3.touchscreen = i16;
            }
            int i17 = configuration.keyboard;
            int i18 = configuration2.keyboard;
            if (i17 != i18) {
                configuration3.keyboard = i18;
            }
            int i19 = configuration.keyboardHidden;
            int i20 = configuration2.keyboardHidden;
            if (i19 != i20) {
                configuration3.keyboardHidden = i20;
            }
            int i21 = configuration.navigation;
            int i22 = configuration2.navigation;
            if (i21 != i22) {
                configuration3.navigation = i22;
            }
            int i23 = configuration.navigationHidden;
            int i24 = configuration2.navigationHidden;
            if (i23 != i24) {
                configuration3.navigationHidden = i24;
            }
            int i25 = configuration.orientation;
            int i26 = configuration2.orientation;
            if (i25 != i26) {
                configuration3.orientation = i26;
            }
            int i27 = configuration.screenLayout & 15;
            int i28 = configuration2.screenLayout;
            if (i27 != (i28 & 15)) {
                configuration3.screenLayout |= i28 & 15;
            }
            int i29 = configuration.screenLayout & 192;
            int i30 = configuration2.screenLayout;
            if (i29 != (i30 & 192)) {
                configuration3.screenLayout |= i30 & 192;
            }
            int i31 = configuration.screenLayout & 48;
            int i32 = configuration2.screenLayout;
            if (i31 != (i32 & 48)) {
                configuration3.screenLayout |= i32 & 48;
            }
            int i33 = configuration.screenLayout & 768;
            int i34 = configuration2.screenLayout;
            if (i33 != (i34 & 768)) {
                configuration3.screenLayout |= i34 & 768;
            }
            if (i14 >= 26) {
                l.a(configuration, configuration2, configuration3);
            }
            int i35 = configuration.uiMode & 15;
            int i36 = configuration2.uiMode;
            if (i35 != (i36 & 15)) {
                configuration3.uiMode |= i36 & 15;
            }
            int i37 = configuration.uiMode & 48;
            int i38 = configuration2.uiMode;
            if (i37 != (i38 & 48)) {
                configuration3.uiMode |= i38 & 48;
            }
            int i39 = configuration.screenWidthDp;
            int i40 = configuration2.screenWidthDp;
            if (i39 != i40) {
                configuration3.screenWidthDp = i40;
            }
            int i41 = configuration.screenHeightDp;
            int i42 = configuration2.screenHeightDp;
            if (i41 != i42) {
                configuration3.screenHeightDp = i42;
            }
            int i43 = configuration.smallestScreenWidthDp;
            int i44 = configuration2.smallestScreenWidthDp;
            if (i43 != i44) {
                configuration3.smallestScreenWidthDp = i44;
            }
            int i45 = configuration.densityDpi;
            int i46 = configuration2.densityDpi;
            if (i45 != i46) {
                configuration3.densityDpi = i46;
            }
        }
        return configuration3;
    }

    private int s0(Context context) {
        int i10;
        if (!this.f1448h0 && (this.f1461u instanceof Activity)) {
            PackageManager packageManager = context.getPackageManager();
            if (packageManager == null) {
                return 0;
            }
            try {
                if (Build.VERSION.SDK_INT >= 29) {
                    i10 = 269221888;
                } else {
                    i10 = 786432;
                }
                ActivityInfo activityInfo = packageManager.getActivityInfo(new ComponentName(context, this.f1461u.getClass()), i10);
                if (activityInfo != null) {
                    this.f1447g0 = activityInfo.configChanges;
                }
            } catch (PackageManager.NameNotFoundException e10) {
                Log.d("AppCompatDelegate", "Exception while getting ActivityInfo", e10);
                this.f1447g0 = 0;
            }
        }
        this.f1448h0 = true;
        return this.f1447g0;
    }

    private p t0(Context context) {
        if (this.f1450j0 == null) {
            this.f1450j0 = new o(context);
        }
        return this.f1450j0;
    }

    private p u0(Context context) {
        if (this.f1449i0 == null) {
            this.f1449i0 = new q(u.a(context));
        }
        return this.f1449i0;
    }

    private void z0() {
        n0();
        if (this.R && this.f1466z == null) {
            Object obj = this.f1461u;
            if (obj instanceof Activity) {
                this.f1466z = new v((Activity) this.f1461u, this.S);
            } else if (obj instanceof Dialog) {
                this.f1466z = new v((Dialog) this.f1461u);
            }
            ActionBar actionBar = this.f1466z;
            if (actionBar != null) {
                actionBar.r(this.f1454n0);
            }
        }
    }

    /* JADX WARN: Removed duplicated region for block: B:18:0x0058  */
    @Override // androidx.appcompat.app.AppCompatDelegate
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public void A() {
        /*
            r3 = this;
            java.lang.Object r0 = r3.f1461u
            boolean r0 = r0 instanceof android.app.Activity
            if (r0 == 0) goto L9
            androidx.appcompat.app.AppCompatDelegate.G(r3)
        L9:
            boolean r0 = r3.f1451k0
            if (r0 == 0) goto L18
            android.view.Window r0 = r3.f1463w
            android.view.View r0 = r0.getDecorView()
            java.lang.Runnable r1 = r3.f1453m0
            r0.removeCallbacks(r1)
        L18:
            r0 = 1
            r3.f1443c0 = r0
            int r0 = r3.f1445e0
            r1 = -100
            if (r0 == r1) goto L45
            java.lang.Object r0 = r3.f1461u
            boolean r1 = r0 instanceof android.app.Activity
            if (r1 == 0) goto L45
            android.app.Activity r0 = (android.app.Activity) r0
            boolean r0 = r0.isChangingConfigurations()
            if (r0 == 0) goto L45
            androidx.collection.SimpleArrayMap r0 = androidx.appcompat.app.e.f1437u0
            java.lang.Object r1 = r3.f1461u
            java.lang.Class r1 = r1.getClass()
            java.lang.String r1 = r1.getName()
            int r2 = r3.f1445e0
            java.lang.Integer r2 = java.lang.Integer.valueOf(r2)
            r0.put(r1, r2)
            goto L54
        L45:
            androidx.collection.SimpleArrayMap r0 = androidx.appcompat.app.e.f1437u0
            java.lang.Object r1 = r3.f1461u
            java.lang.Class r1 = r1.getClass()
            java.lang.String r1 = r1.getName()
            r0.remove(r1)
        L54:
            androidx.appcompat.app.ActionBar r0 = r3.f1466z
            if (r0 == 0) goto L5b
            r0.n()
        L5b:
            r3.d0()
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: androidx.appcompat.app.e.A():void");
    }

    @Override // androidx.appcompat.app.AppCompatDelegate
    public void B(Bundle bundle) {
        n0();
    }

    @Override // androidx.appcompat.app.AppCompatDelegate
    public void C() {
        ActionBar u10 = u();
        if (u10 != null) {
            u10.v(true);
        }
    }

    @Override // androidx.appcompat.app.AppCompatDelegate
    public void D(Bundle bundle) {
    }

    @Override // androidx.appcompat.app.AppCompatDelegate
    public void E() {
        W(true, false);
    }

    public boolean E0() {
        return this.K;
    }

    @Override // androidx.appcompat.app.AppCompatDelegate
    public void F() {
        ActionBar u10 = u();
        if (u10 != null) {
            u10.v(false);
        }
    }

    int F0(Context context, int i10) {
        if (i10 == -100) {
            return -1;
        }
        if (i10 != -1) {
            if (i10 != 0) {
                if (i10 != 1 && i10 != 2) {
                    if (i10 == 3) {
                        return t0(context).c();
                    }
                    throw new IllegalStateException("Unknown value set for night mode. Please use one of the MODE_NIGHT values from AppCompatDelegate.");
                }
            } else if (((UiModeManager) context.getApplicationContext().getSystemService("uimode")).getNightMode() == 0) {
                return -1;
            } else {
                return u0(context).c();
            }
        }
        return i10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean G0() {
        boolean z10 = this.Z;
        this.Z = false;
        s w02 = w0(0, false);
        if (w02 != null && w02.f1505o) {
            if (!z10) {
                f0(w02, true);
            }
            return true;
        }
        androidx.appcompat.view.ActionMode actionMode = this.F;
        if (actionMode != null) {
            actionMode.c();
            return true;
        }
        ActionBar u10 = u();
        if (u10 == null || !u10.g()) {
            return false;
        }
        return true;
    }

    boolean H0(int i10, KeyEvent keyEvent) {
        boolean z10 = true;
        if (i10 != 4) {
            if (i10 == 82) {
                I0(0, keyEvent);
                return true;
            }
        } else {
            if ((keyEvent.getFlags() & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) == 0) {
                z10 = false;
            }
            this.Z = z10;
        }
        return false;
    }

    @Override // androidx.appcompat.app.AppCompatDelegate
    public boolean I(int i10) {
        int U0 = U0(i10);
        if (this.V && U0 == 108) {
            return false;
        }
        if (this.R && U0 == 1) {
            this.R = false;
        }
        if (U0 != 1) {
            if (U0 != 2) {
                if (U0 != 5) {
                    if (U0 != 10) {
                        if (U0 != 108) {
                            if (U0 != 109) {
                                return this.f1463w.requestFeature(U0);
                            }
                            b1();
                            this.S = true;
                            return true;
                        }
                        b1();
                        this.R = true;
                        return true;
                    }
                    b1();
                    this.T = true;
                    return true;
                }
                b1();
                this.Q = true;
                return true;
            }
            b1();
            this.P = true;
            return true;
        }
        b1();
        this.V = true;
        return true;
    }

    boolean J0(int i10, KeyEvent keyEvent) {
        ActionBar u10 = u();
        if (u10 != null && u10.o(i10, keyEvent)) {
            return true;
        }
        s sVar = this.Y;
        if (sVar != null && R0(sVar, keyEvent.getKeyCode(), keyEvent, 1)) {
            s sVar2 = this.Y;
            if (sVar2 != null) {
                sVar2.f1504n = true;
            }
            return true;
        }
        if (this.Y == null) {
            s w02 = w0(0, true);
            S0(w02, keyEvent);
            boolean R0 = R0(w02, keyEvent.getKeyCode(), keyEvent, 1);
            w02.f1503m = false;
            if (R0) {
                return true;
            }
        }
        return false;
    }

    @Override // androidx.appcompat.app.AppCompatDelegate
    public void K(int i10) {
        n0();
        ViewGroup viewGroup = (ViewGroup) this.M.findViewById(16908290);
        viewGroup.removeAllViews();
        LayoutInflater.from(this.f1462v).inflate(i10, viewGroup);
        this.f1464x.c(this.f1463w.getCallback());
    }

    boolean K0(int i10, KeyEvent keyEvent) {
        if (i10 != 4) {
            if (i10 == 82) {
                L0(0, keyEvent);
                return true;
            }
        } else if (G0()) {
            return true;
        }
        return false;
    }

    @Override // androidx.appcompat.app.AppCompatDelegate
    public void L(View view) {
        n0();
        ViewGroup viewGroup = (ViewGroup) this.M.findViewById(16908290);
        viewGroup.removeAllViews();
        viewGroup.addView(view);
        this.f1464x.c(this.f1463w.getCallback());
    }

    @Override // androidx.appcompat.app.AppCompatDelegate
    public void M(View view, ViewGroup.LayoutParams layoutParams) {
        n0();
        ViewGroup viewGroup = (ViewGroup) this.M.findViewById(16908290);
        viewGroup.removeAllViews();
        viewGroup.addView(view, layoutParams);
        this.f1464x.c(this.f1463w.getCallback());
    }

    void M0(int i10) {
        ActionBar u10;
        if (i10 == 108 && (u10 = u()) != null) {
            u10.h(true);
        }
    }

    void N0(int i10) {
        if (i10 == 108) {
            ActionBar u10 = u();
            if (u10 != null) {
                u10.h(false);
            }
        } else if (i10 == 0) {
            s w02 = w0(i10, true);
            if (w02.f1505o) {
                f0(w02, false);
            }
        }
    }

    @Override // androidx.appcompat.app.AppCompatDelegate
    public void O(OnBackInvokedDispatcher onBackInvokedDispatcher) {
        OnBackInvokedCallback onBackInvokedCallback;
        super.O(onBackInvokedDispatcher);
        OnBackInvokedDispatcher onBackInvokedDispatcher2 = this.f1459s0;
        if (onBackInvokedDispatcher2 != null && (onBackInvokedCallback = this.f1460t0) != null) {
            m.c(onBackInvokedDispatcher2, onBackInvokedCallback);
            this.f1460t0 = null;
        }
        if (onBackInvokedDispatcher == null) {
            Object obj = this.f1461u;
            if ((obj instanceof Activity) && ((Activity) obj).getWindow() != null) {
                this.f1459s0 = m.a((Activity) this.f1461u);
                f1();
            }
        }
        this.f1459s0 = onBackInvokedDispatcher;
        f1();
    }

    void O0(ViewGroup viewGroup) {
    }

    @Override // androidx.appcompat.app.AppCompatDelegate
    public void P(Toolbar toolbar) {
        if (!(this.f1461u instanceof Activity)) {
            return;
        }
        ActionBar u10 = u();
        if (!(u10 instanceof v)) {
            this.A = null;
            if (u10 != null) {
                u10.n();
            }
            this.f1466z = null;
            if (toolbar != null) {
                androidx.appcompat.app.s sVar = new androidx.appcompat.app.s(toolbar, x0(), this.f1464x);
                this.f1466z = sVar;
                this.f1464x.e(sVar.f1538c);
                toolbar.setBackInvokedCallbackEnabled(true);
            } else {
                this.f1464x.e(null);
            }
            w();
            return;
        }
        throw new IllegalStateException("This Activity already has an action bar supplied by the window decor. Do not request Window.FEATURE_SUPPORT_ACTION_BAR and set windowActionBar to false in your theme to use a Toolbar instead.");
    }

    @Override // androidx.appcompat.app.AppCompatDelegate
    public void Q(int i10) {
        this.f1446f0 = i10;
    }

    final ActionBar Q0() {
        return this.f1466z;
    }

    @Override // androidx.appcompat.app.AppCompatDelegate
    public final void R(CharSequence charSequence) {
        this.B = charSequence;
        y yVar = this.C;
        if (yVar != null) {
            yVar.setWindowTitle(charSequence);
        } else if (Q0() != null) {
            Q0().x(charSequence);
        } else {
            TextView textView = this.N;
            if (textView != null) {
                textView.setText(charSequence);
            }
        }
    }

    @Override // androidx.appcompat.app.AppCompatDelegate
    public androidx.appcompat.view.ActionMode S(ActionMode.Callback callback) {
        androidx.appcompat.app.b bVar;
        if (callback != null) {
            androidx.appcompat.view.ActionMode actionMode = this.F;
            if (actionMode != null) {
                actionMode.c();
            }
            i iVar = new i(callback);
            ActionBar u10 = u();
            if (u10 != null) {
                androidx.appcompat.view.ActionMode y10 = u10.y(iVar);
                this.F = y10;
                if (y10 != null && (bVar = this.f1465y) != null) {
                    bVar.onSupportActionModeStarted(y10);
                }
            }
            if (this.F == null) {
                this.F = a1(iVar);
            }
            f1();
            return this.F;
        }
        throw new IllegalArgumentException("ActionMode callback can not be null.");
    }

    void V0(Configuration configuration, LocaleListCompat localeListCompat) {
        k.d(configuration, localeListCompat);
    }

    void W0(LocaleListCompat localeListCompat) {
        k.c(localeListCompat);
    }

    final boolean X0() {
        ViewGroup viewGroup;
        if (this.L && (viewGroup = this.M) != null && viewGroup.isLaidOut()) {
            return true;
        }
        return false;
    }

    LocaleListCompat Z(Context context) {
        LocaleListCompat t10;
        if (Build.VERSION.SDK_INT >= 33 || (t10 = AppCompatDelegate.t()) == null) {
            return null;
        }
        LocaleListCompat v02 = v0(context.getApplicationContext().getResources().getConfiguration());
        LocaleListCompat b10 = androidx.appcompat.app.q.b(t10, v02);
        if (b10.e()) {
            return v02;
        }
        return b10;
    }

    boolean Z0() {
        if (this.f1459s0 == null) {
            return false;
        }
        s w02 = w0(0, false);
        if ((w02 == null || !w02.f1505o) && this.F == null) {
            return false;
        }
        return true;
    }

    @Override // androidx.appcompat.view.menu.e.a
    public boolean a(androidx.appcompat.view.menu.e eVar, MenuItem menuItem) {
        s p02;
        Window.Callback y02 = y0();
        if (y02 != null && !this.f1443c0 && (p02 = p0(eVar.D())) != null) {
            return y02.onMenuItemSelected(p02.f1491a, menuItem);
        }
        return false;
    }

    /* JADX WARN: Removed duplicated region for block: B:16:0x0025  */
    /* JADX WARN: Removed duplicated region for block: B:17:0x0029  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    androidx.appcompat.view.ActionMode a1(androidx.appcompat.view.ActionMode.Callback r8) {
        /*
            Method dump skipped, instructions count: 364
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: androidx.appcompat.app.e.a1(androidx.appcompat.view.ActionMode$Callback):androidx.appcompat.view.ActionMode");
    }

    @Override // androidx.appcompat.view.menu.e.a
    public void b(androidx.appcompat.view.menu.e eVar) {
        T0(true);
    }

    void b0(int i10, s sVar, Menu menu) {
        if (menu == null) {
            if (sVar == null && i10 >= 0) {
                s[] sVarArr = this.X;
                if (i10 < sVarArr.length) {
                    sVar = sVarArr[i10];
                }
            }
            if (sVar != null) {
                menu = sVar.f1500j;
            }
        }
        if ((sVar == null || sVar.f1505o) && !this.f1443c0) {
            this.f1464x.d(this.f1463w.getCallback(), i10, menu);
        }
    }

    void c0(androidx.appcompat.view.menu.e eVar) {
        if (this.W) {
            return;
        }
        this.W = true;
        this.C.i();
        Window.Callback y02 = y0();
        if (y02 != null && !this.f1443c0) {
            y02.onPanelClosed(108, eVar);
        }
        this.W = false;
    }

    @Override // androidx.appcompat.app.AppCompatDelegate
    public void e(View view, ViewGroup.LayoutParams layoutParams) {
        n0();
        ((ViewGroup) this.M.findViewById(16908290)).addView(view, layoutParams);
        this.f1464x.c(this.f1463w.getCallback());
    }

    void e0(int i10) {
        f0(w0(i10, true), true);
    }

    @Override // androidx.appcompat.app.AppCompatDelegate
    public boolean f() {
        return V(true);
    }

    void f0(s sVar, boolean z10) {
        ViewGroup viewGroup;
        y yVar;
        if (z10 && sVar.f1491a == 0 && (yVar = this.C) != null && yVar.e()) {
            c0(sVar.f1500j);
            return;
        }
        WindowManager windowManager = (WindowManager) this.f1462v.getSystemService("window");
        if (windowManager != null && sVar.f1505o && (viewGroup = sVar.f1497g) != null) {
            windowManager.removeView(viewGroup);
            if (z10) {
                b0(sVar.f1491a, sVar, null);
            }
        }
        sVar.f1503m = false;
        sVar.f1504n = false;
        sVar.f1505o = false;
        sVar.f1498h = null;
        sVar.f1507q = true;
        if (this.Y == sVar) {
            this.Y = null;
        }
        if (sVar.f1491a == 0) {
            f1();
        }
    }

    void f1() {
        OnBackInvokedCallback onBackInvokedCallback;
        if (Build.VERSION.SDK_INT >= 33) {
            boolean Z0 = Z0();
            if (Z0 && this.f1460t0 == null) {
                this.f1460t0 = m.b(this.f1459s0, this);
            } else if (!Z0 && (onBackInvokedCallback = this.f1460t0) != null) {
                m.c(this.f1459s0, onBackInvokedCallback);
                this.f1460t0 = null;
            }
        }
    }

    final int h1(WindowInsetsCompat windowInsetsCompat, Rect rect) {
        int i10;
        boolean z10;
        int o10;
        int p10;
        boolean z11;
        int i11 = 0;
        if (windowInsetsCompat != null) {
            i10 = windowInsetsCompat.q();
        } else if (rect != null) {
            i10 = rect.top;
        } else {
            i10 = 0;
        }
        ActionBarContextView actionBarContextView = this.G;
        if (actionBarContextView != null && (actionBarContextView.getLayoutParams() instanceof ViewGroup.MarginLayoutParams)) {
            ViewGroup.MarginLayoutParams marginLayoutParams = (ViewGroup.MarginLayoutParams) this.G.getLayoutParams();
            boolean z12 = true;
            if (this.G.isShown()) {
                if (this.f1455o0 == null) {
                    this.f1455o0 = new Rect();
                    this.f1456p0 = new Rect();
                }
                Rect rect2 = this.f1455o0;
                Rect rect3 = this.f1456p0;
                if (windowInsetsCompat == null) {
                    rect2.set(rect);
                } else {
                    rect2.set(windowInsetsCompat.o(), windowInsetsCompat.q(), windowInsetsCompat.p(), windowInsetsCompat.n());
                }
                g1.a(this.M, rect2, rect3);
                int i12 = rect2.top;
                int i13 = rect2.left;
                int i14 = rect2.right;
                WindowInsetsCompat G = h0.G(this.M);
                if (G == null) {
                    o10 = 0;
                } else {
                    o10 = G.o();
                }
                if (G == null) {
                    p10 = 0;
                } else {
                    p10 = G.p();
                }
                if (marginLayoutParams.topMargin == i12 && marginLayoutParams.leftMargin == i13 && marginLayoutParams.rightMargin == i14) {
                    z11 = false;
                } else {
                    marginLayoutParams.topMargin = i12;
                    marginLayoutParams.leftMargin = i13;
                    marginLayoutParams.rightMargin = i14;
                    z11 = true;
                }
                if (i12 > 0 && this.O == null) {
                    View view = new View(this.f1462v);
                    this.O = view;
                    view.setVisibility(8);
                    FrameLayout.LayoutParams layoutParams = new FrameLayout.LayoutParams(-1, marginLayoutParams.topMargin, 51);
                    layoutParams.leftMargin = o10;
                    layoutParams.rightMargin = p10;
                    this.M.addView(this.O, -1, layoutParams);
                } else {
                    View view2 = this.O;
                    if (view2 != null) {
                        ViewGroup.MarginLayoutParams marginLayoutParams2 = (ViewGroup.MarginLayoutParams) view2.getLayoutParams();
                        int i15 = marginLayoutParams2.height;
                        int i16 = marginLayoutParams.topMargin;
                        if (i15 != i16 || marginLayoutParams2.leftMargin != o10 || marginLayoutParams2.rightMargin != p10) {
                            marginLayoutParams2.height = i16;
                            marginLayoutParams2.leftMargin = o10;
                            marginLayoutParams2.rightMargin = p10;
                            this.O.setLayoutParams(marginLayoutParams2);
                        }
                    }
                }
                View view3 = this.O;
                if (view3 == null) {
                    z12 = false;
                }
                if (z12 && view3.getVisibility() != 0) {
                    i1(this.O);
                }
                if (!this.T && z12) {
                    i10 = 0;
                }
                z10 = z12;
                z12 = z11;
            } else if (marginLayoutParams.topMargin != 0) {
                marginLayoutParams.topMargin = 0;
                z10 = false;
            } else {
                z10 = false;
                z12 = false;
            }
            if (z12) {
                this.G.setLayoutParams(marginLayoutParams);
            }
        } else {
            z10 = false;
        }
        View view4 = this.O;
        if (view4 != null) {
            if (!z10) {
                i11 = 8;
            }
            view4.setVisibility(i11);
        }
        return i10;
    }

    @Override // androidx.appcompat.app.AppCompatDelegate
    public Context i(Context context) {
        Context context2;
        Configuration configuration;
        this.f1441a0 = true;
        int F0 = F0(context, a0());
        if (AppCompatDelegate.x(context)) {
            AppCompatDelegate.U(context);
        }
        LocaleListCompat Z = Z(context);
        if (context instanceof android.view.ContextThemeWrapper) {
            context2 = context;
            try {
                ((android.view.ContextThemeWrapper) context2).applyOverrideConfiguration(g0(context2, F0, Z, null, false));
                return context2;
            } catch (IllegalStateException unused) {
            }
        } else {
            context2 = context;
        }
        if (context2 instanceof ContextThemeWrapper) {
            try {
                ((ContextThemeWrapper) context2).a(g0(context2, F0, Z, null, false));
                return context2;
            } catch (IllegalStateException unused2) {
            }
        }
        if (!f1440x0) {
            return super.i(context2);
        }
        Configuration configuration2 = new Configuration();
        configuration2.uiMode = -1;
        configuration2.fontScale = 0.0f;
        Configuration configuration3 = context2.createConfigurationContext(configuration2).getResources().getConfiguration();
        Configuration configuration4 = context2.getResources().getConfiguration();
        configuration3.uiMode = configuration4.uiMode;
        if (!configuration3.equals(configuration4)) {
            configuration = q0(configuration3, configuration4);
        } else {
            configuration = null;
        }
        Configuration g02 = g0(context2, F0, Z, configuration, true);
        ContextThemeWrapper contextThemeWrapper = new ContextThemeWrapper(context2, f.i.f22334c);
        contextThemeWrapper.a(g02);
        try {
            if (context2.getTheme() != null) {
                j.g.a(contextThemeWrapper.getTheme());
            }
        } catch (NullPointerException unused3) {
        }
        return super.i(contextThemeWrapper);
    }

    public View i0(View view, String str, Context context, AttributeSet attributeSet) {
        boolean z10;
        if (this.f1457q0 == null) {
            TypedArray obtainStyledAttributes = this.f1462v.obtainStyledAttributes(f.j.f22457y0);
            String string = obtainStyledAttributes.getString(f.j.C0);
            obtainStyledAttributes.recycle();
            if (string == null) {
                this.f1457q0 = new androidx.appcompat.app.n();
            } else {
                try {
                    this.f1457q0 = (androidx.appcompat.app.n) this.f1462v.getClassLoader().loadClass(string).getDeclaredConstructor(null).newInstance(null);
                } catch (Throwable th2) {
                    Log.i("AppCompatDelegate", "Failed to instantiate custom view inflater " + string + ". Falling back to default.", th2);
                    this.f1457q0 = new androidx.appcompat.app.n();
                }
            }
        }
        boolean z11 = f1438v0;
        boolean z12 = false;
        if (z11) {
            if (this.f1458r0 == null) {
                this.f1458r0 = new androidx.appcompat.app.p();
            }
            if (this.f1458r0.a(attributeSet)) {
                z10 = true;
                return this.f1457q0.r(view, str, context, attributeSet, z10, z11, true, f1.d());
            } else if (attributeSet instanceof XmlPullParser) {
                if (((XmlPullParser) attributeSet).getDepth() > 1) {
                    z12 = true;
                }
            } else {
                z12 = Y0((ViewParent) view);
            }
        }
        z10 = z12;
        return this.f1457q0.r(view, str, context, attributeSet, z10, z11, true, f1.d());
    }

    void j0() {
        androidx.appcompat.view.menu.e eVar;
        y yVar = this.C;
        if (yVar != null) {
            yVar.i();
        }
        if (this.H != null) {
            this.f1463w.getDecorView().removeCallbacks(this.I);
            if (this.H.isShowing()) {
                try {
                    this.H.dismiss();
                } catch (IllegalArgumentException unused) {
                }
            }
            this.H = null;
        }
        m0();
        s w02 = w0(0, false);
        if (w02 != null && (eVar = w02.f1500j) != null) {
            eVar.close();
        }
    }

    boolean k0(KeyEvent keyEvent) {
        View decorView;
        Object obj = this.f1461u;
        if (((obj instanceof k.a) || (obj instanceof androidx.appcompat.app.l)) && (decorView = this.f1463w.getDecorView()) != null && androidx.core.view.k.d(decorView, keyEvent)) {
            return true;
        }
        if (keyEvent.getKeyCode() == 82 && this.f1464x.b(this.f1463w.getCallback(), keyEvent)) {
            return true;
        }
        int keyCode = keyEvent.getKeyCode();
        if (keyEvent.getAction() == 0) {
            return H0(keyCode, keyEvent);
        }
        return K0(keyCode, keyEvent);
    }

    @Override // androidx.appcompat.app.AppCompatDelegate
    public View l(int i10) {
        n0();
        return this.f1463w.findViewById(i10);
    }

    void l0(int i10) {
        s w02;
        s w03 = w0(i10, true);
        if (w03.f1500j != null) {
            Bundle bundle = new Bundle();
            w03.f1500j.R(bundle);
            if (bundle.size() > 0) {
                w03.f1509s = bundle;
            }
            w03.f1500j.e0();
            w03.f1500j.clear();
        }
        w03.f1508r = true;
        w03.f1507q = true;
        if ((i10 == 108 || i10 == 0) && this.C != null && (w02 = w0(0, false)) != null) {
            w02.f1503m = false;
            S0(w02, null);
        }
    }

    void m0() {
        r0 r0Var = this.J;
        if (r0Var != null) {
            r0Var.c();
        }
    }

    @Override // androidx.appcompat.app.AppCompatDelegate
    public Context n() {
        return this.f1462v;
    }

    @Override // android.view.LayoutInflater.Factory2
    public final View onCreateView(View view, String str, Context context, AttributeSet attributeSet) {
        return i0(view, str, context, attributeSet);
    }

    @Override // androidx.appcompat.app.AppCompatDelegate
    public final ActionBarDrawerToggle$Delegate p() {
        return new f();
    }

    s p0(Menu menu) {
        int i10;
        s[] sVarArr = this.X;
        if (sVarArr != null) {
            i10 = sVarArr.length;
        } else {
            i10 = 0;
        }
        for (int i11 = 0; i11 < i10; i11++) {
            s sVar = sVarArr[i11];
            if (sVar != null && sVar.f1500j == menu) {
                return sVar;
            }
        }
        return null;
    }

    @Override // androidx.appcompat.app.AppCompatDelegate
    public int q() {
        return this.f1445e0;
    }

    final Context r0() {
        Context context;
        ActionBar u10 = u();
        if (u10 != null) {
            context = u10.j();
        } else {
            context = null;
        }
        if (context == null) {
            return this.f1462v;
        }
        return context;
    }

    @Override // androidx.appcompat.app.AppCompatDelegate
    public MenuInflater s() {
        Context context;
        if (this.A == null) {
            z0();
            ActionBar actionBar = this.f1466z;
            if (actionBar != null) {
                context = actionBar.j();
            } else {
                context = this.f1462v;
            }
            this.A = new androidx.appcompat.view.e(context);
        }
        return this.A;
    }

    @Override // androidx.appcompat.app.AppCompatDelegate
    public ActionBar u() {
        z0();
        return this.f1466z;
    }

    @Override // androidx.appcompat.app.AppCompatDelegate
    public void v() {
        LayoutInflater from = LayoutInflater.from(this.f1462v);
        if (from.getFactory() == null) {
            androidx.core.view.l.a(from, this);
        } else if (!(from.getFactory2() instanceof e)) {
            Log.i("AppCompatDelegate", "The Activity's LayoutInflater already has a Factory installed so we can not install AppCompat's");
        }
    }

    LocaleListCompat v0(Configuration configuration) {
        return k.b(configuration);
    }

    @Override // androidx.appcompat.app.AppCompatDelegate
    public void w() {
        if (Q0() != null && !u().l()) {
            D0(0);
        }
    }

    protected s w0(int i10, boolean z10) {
        s[] sVarArr = this.X;
        if (sVarArr == null || sVarArr.length <= i10) {
            s[] sVarArr2 = new s[i10 + 1];
            if (sVarArr != null) {
                System.arraycopy(sVarArr, 0, sVarArr2, 0, sVarArr.length);
            }
            this.X = sVarArr2;
            sVarArr = sVarArr2;
        }
        s sVar = sVarArr[i10];
        if (sVar == null) {
            s sVar2 = new s(i10);
            sVarArr[i10] = sVar2;
            return sVar2;
        }
        return sVar;
    }

    final CharSequence x0() {
        Object obj = this.f1461u;
        if (obj instanceof Activity) {
            return ((Activity) obj).getTitle();
        }
        return this.B;
    }

    @Override // androidx.appcompat.app.AppCompatDelegate
    public void y(Configuration configuration) {
        ActionBar u10;
        if (this.R && this.L && (u10 = u()) != null) {
            u10.m(configuration);
        }
        androidx.appcompat.widget.j.b().g(this.f1462v);
        this.f1444d0 = new Configuration(this.f1462v.getResources().getConfiguration());
        W(false, false);
    }

    final Window.Callback y0() {
        return this.f1463w.getCallback();
    }

    @Override // androidx.appcompat.app.AppCompatDelegate
    public void z(Bundle bundle) {
        String str;
        this.f1441a0 = true;
        V(false);
        o0();
        Object obj = this.f1461u;
        if (obj instanceof Activity) {
            try {
                str = androidx.core.app.i.c((Activity) obj);
            } catch (IllegalArgumentException unused) {
                str = null;
            }
            if (str != null) {
                ActionBar Q0 = Q0();
                if (Q0 == null) {
                    this.f1454n0 = true;
                } else {
                    Q0.r(true);
                }
            }
            AppCompatDelegate.d(this);
        }
        this.f1444d0 = new Configuration(this.f1462v.getResources().getConfiguration());
        this.f1442b0 = true;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public e(Dialog dialog, androidx.appcompat.app.b bVar) {
        this(dialog.getContext(), dialog.getWindow(), bVar, dialog);
    }

    @Override // android.view.LayoutInflater.Factory
    public View onCreateView(String str, Context context, AttributeSet attributeSet) {
        return onCreateView(null, str, context, attributeSet);
    }

    private e(Context context, Window window, androidx.appcompat.app.b bVar, Object obj) {
        AppCompatActivity c12;
        this.J = null;
        this.K = true;
        this.f1445e0 = -100;
        this.f1453m0 = new a();
        this.f1462v = context;
        this.f1465y = bVar;
        this.f1461u = obj;
        if (this.f1445e0 == -100 && (obj instanceof Dialog) && (c12 = c1()) != null) {
            this.f1445e0 = c12.getDelegate().q();
        }
        if (this.f1445e0 == -100) {
            SimpleArrayMap simpleArrayMap = f1437u0;
            Integer num = (Integer) simpleArrayMap.get(obj.getClass().getName());
            if (num != null) {
                this.f1445e0 = num.intValue();
                simpleArrayMap.remove(obj.getClass().getName());
            }
        }
        if (window != null) {
            Y(window);
        }
        androidx.appcompat.widget.j.h();
    }
}
