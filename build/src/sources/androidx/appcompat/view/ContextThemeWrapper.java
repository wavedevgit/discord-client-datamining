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
    private static Configuration f1295f;

    /* renamed from: a  reason: collision with root package name */
    private int f1296a;

    /* renamed from: b  reason: collision with root package name */
    private Resources.Theme f1297b;

    /* renamed from: c  reason: collision with root package name */
    private LayoutInflater f1298c;

    /* renamed from: d  reason: collision with root package name */
    private Configuration f1299d;

    /* renamed from: e  reason: collision with root package name */
    private Resources f1300e;

    public ContextThemeWrapper(Context context, int i10) {
        super(context);
        this.f1296a = i10;
    }

    private Resources b() {
        if (this.f1300e == null) {
            Configuration configuration = this.f1299d;
            if (configuration != null && (Build.VERSION.SDK_INT < 26 || !e(configuration))) {
                this.f1300e = createConfigurationContext(this.f1299d).getResources();
            } else {
                this.f1300e = super.getResources();
            }
        }
        return this.f1300e;
    }

    private void d() {
        boolean z10;
        if (this.f1297b == null) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (z10) {
            this.f1297b = getResources().newTheme();
            Resources.Theme theme = getBaseContext().getTheme();
            if (theme != null) {
                this.f1297b.setTo(theme);
            }
        }
        f(this.f1297b, this.f1296a, z10);
    }

    private static boolean e(Configuration configuration) {
        if (configuration == null) {
            return true;
        }
        if (f1295f == null) {
            Configuration configuration2 = new Configuration();
            configuration2.fontScale = 0.0f;
            f1295f = configuration2;
        }
        return configuration.equals(f1295f);
    }

    public void a(Configuration configuration) {
        if (this.f1300e == null) {
            if (this.f1299d == null) {
                this.f1299d = new Configuration(configuration);
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
        return this.f1296a;
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
            if (this.f1298c == null) {
                this.f1298c = LayoutInflater.from(getBaseContext()).cloneInContext(this);
            }
            return this.f1298c;
        }
        return getBaseContext().getSystemService(str);
    }

    @Override // android.content.ContextWrapper, android.content.Context
    public Resources.Theme getTheme() {
        Resources.Theme theme = this.f1297b;
        if (theme != null) {
            return theme;
        }
        if (this.f1296a == 0) {
            this.f1296a = i.f23414e;
        }
        d();
        return this.f1297b;
    }

    @Override // android.content.ContextWrapper, android.content.Context
    public void setTheme(int i10) {
        if (this.f1296a != i10) {
            this.f1296a = i10;
            d();
        }
    }

    public ContextThemeWrapper(Context context, Resources.Theme theme) {
        super(context);
        this.f1297b = theme;
    }
}
