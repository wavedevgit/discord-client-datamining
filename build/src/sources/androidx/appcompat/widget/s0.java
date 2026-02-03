package androidx.appcompat.widget;

import android.content.Context;
import android.content.ContextWrapper;
import android.content.res.AssetManager;
import android.content.res.Resources;
import java.lang.ref.WeakReference;
import java.util.ArrayList;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class s0 extends ContextWrapper {

    /* renamed from: c  reason: collision with root package name */
    private static final Object f1800c = new Object();

    /* renamed from: d  reason: collision with root package name */
    private static ArrayList f1801d;

    /* renamed from: a  reason: collision with root package name */
    private final Resources f1802a;

    /* renamed from: b  reason: collision with root package name */
    private final Resources.Theme f1803b;

    private s0(Context context) {
        super(context);
        if (f1.d()) {
            f1 f1Var = new f1(this, context.getResources());
            this.f1802a = f1Var;
            Resources.Theme newTheme = f1Var.newTheme();
            this.f1803b = newTheme;
            newTheme.setTo(context.getTheme());
            return;
        }
        this.f1802a = new u0(this, context.getResources());
        this.f1803b = null;
    }

    private static boolean a(Context context) {
        if ((context instanceof s0) || (context.getResources() instanceof u0) || (context.getResources() instanceof f1) || !f1.d()) {
            return false;
        }
        return true;
    }

    public static Context b(Context context) {
        s0 s0Var;
        if (a(context)) {
            synchronized (f1800c) {
                try {
                    ArrayList arrayList = f1801d;
                    if (arrayList == null) {
                        f1801d = new ArrayList();
                    } else {
                        for (int size = arrayList.size() - 1; size >= 0; size--) {
                            WeakReference weakReference = (WeakReference) f1801d.get(size);
                            if (weakReference == null || weakReference.get() == null) {
                                f1801d.remove(size);
                            }
                        }
                        for (int size2 = f1801d.size() - 1; size2 >= 0; size2--) {
                            WeakReference weakReference2 = (WeakReference) f1801d.get(size2);
                            if (weakReference2 != null) {
                                s0Var = (s0) weakReference2.get();
                            } else {
                                s0Var = null;
                            }
                            if (s0Var != null && s0Var.getBaseContext() == context) {
                                return s0Var;
                            }
                        }
                    }
                    s0 s0Var2 = new s0(context);
                    f1801d.add(new WeakReference(s0Var2));
                    return s0Var2;
                } catch (Throwable th2) {
                    throw th2;
                }
            }
        }
        return context;
    }

    @Override // android.content.ContextWrapper, android.content.Context
    public AssetManager getAssets() {
        return this.f1802a.getAssets();
    }

    @Override // android.content.ContextWrapper, android.content.Context
    public Resources getResources() {
        return this.f1802a;
    }

    @Override // android.content.ContextWrapper, android.content.Context
    public Resources.Theme getTheme() {
        Resources.Theme theme = this.f1803b;
        if (theme == null) {
            return super.getTheme();
        }
        return theme;
    }

    @Override // android.content.ContextWrapper, android.content.Context
    public void setTheme(int i10) {
        Resources.Theme theme = this.f1803b;
        if (theme == null) {
            super.setTheme(i10);
        } else {
            theme.applyStyle(i10, true);
        }
    }
}
