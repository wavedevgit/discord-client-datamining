package androidx.transition;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class n {

    /* renamed from: a  reason: collision with root package name */
    private Context f5406a;

    /* renamed from: b  reason: collision with root package name */
    private int f5407b = -1;

    /* renamed from: c  reason: collision with root package name */
    private ViewGroup f5408c;

    /* renamed from: d  reason: collision with root package name */
    private View f5409d;

    /* renamed from: e  reason: collision with root package name */
    private Runnable f5410e;

    /* renamed from: f  reason: collision with root package name */
    private Runnable f5411f;

    public n(ViewGroup viewGroup, View view) {
        this.f5408c = viewGroup;
        this.f5409d = view;
    }

    public static n c(ViewGroup viewGroup) {
        return (n) viewGroup.getTag(l.f5400c);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static void f(ViewGroup viewGroup, n nVar) {
        viewGroup.setTag(l.f5400c, nVar);
    }

    public void a() {
        if (this.f5407b > 0 || this.f5409d != null) {
            d().removeAllViews();
            if (this.f5407b > 0) {
                LayoutInflater.from(this.f5406a).inflate(this.f5407b, this.f5408c);
            } else {
                this.f5408c.addView(this.f5409d);
            }
        }
        Runnable runnable = this.f5410e;
        if (runnable != null) {
            runnable.run();
        }
        f(this.f5408c, this);
    }

    public void b() {
        Runnable runnable;
        if (c(this.f5408c) == this && (runnable = this.f5411f) != null) {
            runnable.run();
        }
    }

    public ViewGroup d() {
        return this.f5408c;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean e() {
        if (this.f5407b > 0) {
            return true;
        }
        return false;
    }
}
