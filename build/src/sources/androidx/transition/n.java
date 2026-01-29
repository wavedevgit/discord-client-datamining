package androidx.transition;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class n {

    /* renamed from: a  reason: collision with root package name */
    private Context f5281a;

    /* renamed from: b  reason: collision with root package name */
    private int f5282b = -1;

    /* renamed from: c  reason: collision with root package name */
    private ViewGroup f5283c;

    /* renamed from: d  reason: collision with root package name */
    private View f5284d;

    /* renamed from: e  reason: collision with root package name */
    private Runnable f5285e;

    /* renamed from: f  reason: collision with root package name */
    private Runnable f5286f;

    public n(ViewGroup viewGroup, View view) {
        this.f5283c = viewGroup;
        this.f5284d = view;
    }

    public static n c(ViewGroup viewGroup) {
        return (n) viewGroup.getTag(l.f5275c);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static void f(ViewGroup viewGroup, n nVar) {
        viewGroup.setTag(l.f5275c, nVar);
    }

    public void a() {
        if (this.f5282b > 0 || this.f5284d != null) {
            d().removeAllViews();
            if (this.f5282b > 0) {
                LayoutInflater.from(this.f5281a).inflate(this.f5282b, this.f5283c);
            } else {
                this.f5283c.addView(this.f5284d);
            }
        }
        Runnable runnable = this.f5285e;
        if (runnable != null) {
            runnable.run();
        }
        f(this.f5283c, this);
    }

    public void b() {
        Runnable runnable;
        if (c(this.f5283c) == this && (runnable = this.f5286f) != null) {
            runnable.run();
        }
    }

    public ViewGroup d() {
        return this.f5283c;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean e() {
        if (this.f5282b > 0) {
            return true;
        }
        return false;
    }
}
