package androidx.appcompat.view;

import android.content.Context;
import android.content.ContextWrapper;
import android.content.res.AssetManager;
import android.content.res.Configuration;
import android.content.res.Resources;
import android.os.Build;
import android.view.LayoutInflater;
import f.i;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class ContextThemeWrapper extends ContextWrapper {

    /* renamed from: f  reason: collision with root package name */
    private static Configuration f1294f;

    /* renamed from: a  reason: collision with root package name */
    private int f1295a;

    /* renamed from: b  reason: collision with root package name */
    private Resources.Theme f1296b;

    /* renamed from: c  reason: collision with root package name */
    private LayoutInflater f1297c;

    /* renamed from: d  reason: collision with root package name */
    private Configuration f1298d;

    /* renamed from: e  reason: collision with root package name */
    private Resources f1299e;

    public ContextThemeWrapper(Context context, int i10) {
        super(context);
        this.f1295a = i10;
    }

    private Resources b() {
        if (this.f1299e == null) {
            Configuration configuration = this.f1298d;
            if (configuration != null && (Build.VERSION.SDK_INT < 26 || !e(configuration))) {
                this.f1299e = createConfigurationContext(this.f1298d).getResources();
            } else {
                this.f1299e = super.getResources();
            }
        }
        return this.f1299e;
    }

    private void d() {
        boolean z10;
        if (this.f1296b == null) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (z10) {
            this.f1296b = getResources().newTheme();
            Resources.Theme theme = getBaseContext().getTheme();
            if (theme != null) {
                this.f1296b.setTo(theme);
            }
        }
        f(this.f1296b, this.f1295a, z10);
    }

    private static boolean e(Configuration configuration) {
        if (configuration == null) {
            return true;
        }
        if (f1294f == null) {
            Configuration configuration2 = new Configuration();
            configuration2.fontScale = 0.0f;
            f1294f = configuration2;
        }
        return configuration.equals(f1294f);
    }

    public void a(Configuration configuration) {
        if (this.f1299e == null) {
            if (this.f1298d == null) {
                this.f1298d = new Configuration(configuration);
                return;
            }
            throw new IllegalStateException("Override configuration has already been set");
        }
        throw new IllegalStateException("getResources() or getAssets() has already been called");
    }

    @Override // android.content.ContextWrapper
    protected void attachBaseContext(Context context) {
        super.attachBaseContext(context);
    }

    public int c() {
        return this.f1295a;
    }

    protected void f(Resources.Theme theme, int i10, boolean z10) {
        theme.applyStyle(i10, true);
    }

    @Override // android.content.ContextWrapper, android.content.Context
    public AssetManager getAssets() {
        return getResources().getAssets();
    }

    @Override // android.content.ContextWrapper, android.content.Context
    public Resources getResources() {
        return b();
    }

    @Override // android.content.ContextWrapper, android.content.Context
    public Object getSystemService(String str) {
        if ("layout_inflater".equals(str)) {
            if (this.f1297c == null) {
                this.f1297c = LayoutInflater.from(getBaseContext()).cloneInContext(this);
            }
            return this.f1297c;
        }
        return getBaseContext().getSystemService(str);
    }

    @Override // android.content.ContextWrapper, android.content.Context
    public Resources.Theme getTheme() {
        Resources.Theme theme = this.f1296b;
        if (theme != null) {
            return theme;
        }
        if (this.f1295a == 0) {
            this.f1295a = i.f22290d;
        }
        d();
        return this.f1296b;
    }

    @Override // android.content.ContextWrapper, android.content.Context
    public void setTheme(int i10) {
        if (this.f1295a != i10) {
            this.f1295a = i10;
            d();
        }
    }

    public ContextThemeWrapper(Context context, Resources.Theme theme) {
        super(context);
        this.f1296b = theme;
    }
}
