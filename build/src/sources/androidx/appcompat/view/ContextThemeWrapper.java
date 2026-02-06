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
    private static Configuration f1597f;

    /* renamed from: a  reason: collision with root package name */
    private int f1598a;

    /* renamed from: b  reason: collision with root package name */
    private Resources.Theme f1599b;

    /* renamed from: c  reason: collision with root package name */
    private LayoutInflater f1600c;

    /* renamed from: d  reason: collision with root package name */
    private Configuration f1601d;

    /* renamed from: e  reason: collision with root package name */
    private Resources f1602e;

    public ContextThemeWrapper(Context context, int i10) {
        super(context);
        this.f1598a = i10;
    }

    private Resources b() {
        if (this.f1602e == null) {
            Configuration configuration = this.f1601d;
            if (configuration != null && (Build.VERSION.SDK_INT < 26 || !e(configuration))) {
                this.f1602e = createConfigurationContext(this.f1601d).getResources();
            } else {
                this.f1602e = super.getResources();
            }
        }
        return this.f1602e;
    }

    private void d() {
        boolean z10;
        if (this.f1599b == null) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (z10) {
            this.f1599b = getResources().newTheme();
            Resources.Theme theme = getBaseContext().getTheme();
            if (theme != null) {
                this.f1599b.setTo(theme);
            }
        }
        f(this.f1599b, this.f1598a, z10);
    }

    private static boolean e(Configuration configuration) {
        if (configuration == null) {
            return true;
        }
        if (f1597f == null) {
            Configuration configuration2 = new Configuration();
            configuration2.fontScale = 0.0f;
            f1597f = configuration2;
        }
        return configuration.equals(f1597f);
    }

    public void a(Configuration configuration) {
        if (this.f1602e == null) {
            if (this.f1601d == null) {
                this.f1601d = new Configuration(configuration);
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
        return this.f1598a;
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
            if (this.f1600c == null) {
                this.f1600c = LayoutInflater.from(getBaseContext()).cloneInContext(this);
            }
            return this.f1600c;
        }
        return getBaseContext().getSystemService(str);
    }

    @Override // android.content.ContextWrapper, android.content.Context
    public Resources.Theme getTheme() {
        Resources.Theme theme = this.f1599b;
        if (theme != null) {
            return theme;
        }
        if (this.f1598a == 0) {
            this.f1598a = i.f22335d;
        }
        d();
        return this.f1599b;
    }

    @Override // android.content.ContextWrapper, android.content.Context
    public void setTheme(int i10) {
        if (this.f1598a != i10) {
            this.f1598a = i10;
            d();
        }
    }

    public ContextThemeWrapper(Context context, Resources.Theme theme) {
        super(context);
        this.f1599b = theme;
    }
}
