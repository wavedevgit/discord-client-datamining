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
    private static Configuration f1143f;

    /* renamed from: a  reason: collision with root package name */
    private int f1144a;

    /* renamed from: b  reason: collision with root package name */
    private Resources.Theme f1145b;

    /* renamed from: c  reason: collision with root package name */
    private LayoutInflater f1146c;

    /* renamed from: d  reason: collision with root package name */
    private Configuration f1147d;

    /* renamed from: e  reason: collision with root package name */
    private Resources f1148e;

    public ContextThemeWrapper(Context context, int i10) {
        super(context);
        this.f1144a = i10;
    }

    private Resources b() {
        if (this.f1148e == null) {
            Configuration configuration = this.f1147d;
            if (configuration != null && (Build.VERSION.SDK_INT < 26 || !e(configuration))) {
                this.f1148e = createConfigurationContext(this.f1147d).getResources();
            } else {
                this.f1148e = super.getResources();
            }
        }
        return this.f1148e;
    }

    private void d() {
        boolean z10;
        if (this.f1145b == null) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (z10) {
            this.f1145b = getResources().newTheme();
            Resources.Theme theme = getBaseContext().getTheme();
            if (theme != null) {
                this.f1145b.setTo(theme);
            }
        }
        f(this.f1145b, this.f1144a, z10);
    }

    private static boolean e(Configuration configuration) {
        if (configuration == null) {
            return true;
        }
        if (f1143f == null) {
            Configuration configuration2 = new Configuration();
            configuration2.fontScale = 0.0f;
            f1143f = configuration2;
        }
        return configuration.equals(f1143f);
    }

    public void a(Configuration configuration) {
        if (this.f1148e == null) {
            if (this.f1147d == null) {
                this.f1147d = new Configuration(configuration);
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
        return this.f1144a;
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
            if (this.f1146c == null) {
                this.f1146c = LayoutInflater.from(getBaseContext()).cloneInContext(this);
            }
            return this.f1146c;
        }
        return getBaseContext().getSystemService(str);
    }

    @Override // android.content.ContextWrapper, android.content.Context
    public Resources.Theme getTheme() {
        Resources.Theme theme = this.f1145b;
        if (theme != null) {
            return theme;
        }
        if (this.f1144a == 0) {
            this.f1144a = i.f24206d;
        }
        d();
        return this.f1145b;
    }

    @Override // android.content.ContextWrapper, android.content.Context
    public void setTheme(int i10) {
        if (this.f1144a != i10) {
            this.f1144a = i10;
            d();
        }
    }

    public ContextThemeWrapper(Context context, Resources.Theme theme) {
        super(context);
        this.f1145b = theme;
    }
}
