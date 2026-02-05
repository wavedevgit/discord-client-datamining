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
    private static Configuration f1268f;

    /* renamed from: a  reason: collision with root package name */
    private int f1269a;

    /* renamed from: b  reason: collision with root package name */
    private Resources.Theme f1270b;

    /* renamed from: c  reason: collision with root package name */
    private LayoutInflater f1271c;

    /* renamed from: d  reason: collision with root package name */
    private Configuration f1272d;

    /* renamed from: e  reason: collision with root package name */
    private Resources f1273e;

    public ContextThemeWrapper(Context context, int i10) {
        super(context);
        this.f1269a = i10;
    }

    private Resources b() {
        if (this.f1273e == null) {
            Configuration configuration = this.f1272d;
            if (configuration != null && (Build.VERSION.SDK_INT < 26 || !e(configuration))) {
                this.f1273e = createConfigurationContext(this.f1272d).getResources();
            } else {
                this.f1273e = super.getResources();
            }
        }
        return this.f1273e;
    }

    private void d() {
        boolean z10;
        if (this.f1270b == null) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (z10) {
            this.f1270b = getResources().newTheme();
            Resources.Theme theme = getBaseContext().getTheme();
            if (theme != null) {
                this.f1270b.setTo(theme);
            }
        }
        f(this.f1270b, this.f1269a, z10);
    }

    private static boolean e(Configuration configuration) {
        if (configuration == null) {
            return true;
        }
        if (f1268f == null) {
            Configuration configuration2 = new Configuration();
            configuration2.fontScale = 0.0f;
            f1268f = configuration2;
        }
        return configuration.equals(f1268f);
    }

    public void a(Configuration configuration) {
        if (this.f1273e == null) {
            if (this.f1272d == null) {
                this.f1272d = new Configuration(configuration);
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
        return this.f1269a;
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
            if (this.f1271c == null) {
                this.f1271c = LayoutInflater.from(getBaseContext()).cloneInContext(this);
            }
            return this.f1271c;
        }
        return getBaseContext().getSystemService(str);
    }

    @Override // android.content.ContextWrapper, android.content.Context
    public Resources.Theme getTheme() {
        Resources.Theme theme = this.f1270b;
        if (theme != null) {
            return theme;
        }
        if (this.f1269a == 0) {
            this.f1269a = i.f22034d;
        }
        d();
        return this.f1270b;
    }

    @Override // android.content.ContextWrapper, android.content.Context
    public void setTheme(int i10) {
        if (this.f1269a != i10) {
            this.f1269a = i10;
            d();
        }
    }

    public ContextThemeWrapper(Context context, Resources.Theme theme) {
        super(context);
        this.f1270b = theme;
    }
}
