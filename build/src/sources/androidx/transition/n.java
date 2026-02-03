package androidx.transition;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class n {

    /* renamed from: a  reason: collision with root package name */
    private Context f5294a;

    /* renamed from: b  reason: collision with root package name */
    private int f5295b = -1;

    /* renamed from: c  reason: collision with root package name */
    private ViewGroup f5296c;

    /* renamed from: d  reason: collision with root package name */
    private View f5297d;

    /* renamed from: e  reason: collision with root package name */
    private Runnable f5298e;

    /* renamed from: f  reason: collision with root package name */
    private Runnable f5299f;

    public n(ViewGroup viewGroup, View view) {
        this.f5296c = viewGroup;
        this.f5297d = view;
    }

    public static n c(ViewGroup viewGroup) {
        return (n) viewGroup.getTag(l.f5288c);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static void f(ViewGroup viewGroup, n nVar) {
        viewGroup.setTag(l.f5288c, nVar);
    }

    public void a() {
        if (this.f5295b > 0 || this.f5297d != null) {
            d().removeAllViews();
            if (this.f5295b > 0) {
                LayoutInflater.from(this.f5294a).inflate(this.f5295b, this.f5296c);
            } else {
                this.f5296c.addView(this.f5297d);
            }
        }
        Runnable runnable = this.f5298e;
        if (runnable != null) {
            runnable.run();
        }
        f(this.f5296c, this);
    }

    public void b() {
        Runnable runnable;
        if (c(this.f5296c) == this && (runnable = this.f5299f) != null) {
            runnable.run();
        }
    }

    public ViewGroup d() {
        return this.f5296c;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean e() {
        if (this.f5295b > 0) {
            return true;
        }
        return false;
    }
}
