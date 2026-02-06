package androidx.transition;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class n {

    /* renamed from: a  reason: collision with root package name */
    private Context f5735a;

    /* renamed from: b  reason: collision with root package name */
    private int f5736b = -1;

    /* renamed from: c  reason: collision with root package name */
    private ViewGroup f5737c;

    /* renamed from: d  reason: collision with root package name */
    private View f5738d;

    /* renamed from: e  reason: collision with root package name */
    private Runnable f5739e;

    /* renamed from: f  reason: collision with root package name */
    private Runnable f5740f;

    public n(ViewGroup viewGroup, View view) {
        this.f5737c = viewGroup;
        this.f5738d = view;
    }

    public static n c(ViewGroup viewGroup) {
        return (n) viewGroup.getTag(l.f5729c);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static void f(ViewGroup viewGroup, n nVar) {
        viewGroup.setTag(l.f5729c, nVar);
    }

    public void a() {
        if (this.f5736b > 0 || this.f5738d != null) {
            d().removeAllViews();
            if (this.f5736b > 0) {
                LayoutInflater.from(this.f5735a).inflate(this.f5736b, this.f5737c);
            } else {
                this.f5737c.addView(this.f5738d);
            }
        }
        Runnable runnable = this.f5739e;
        if (runnable != null) {
            runnable.run();
        }
        f(this.f5737c, this);
    }

    public void b() {
        Runnable runnable;
        if (c(this.f5737c) == this && (runnable = this.f5740f) != null) {
            runnable.run();
        }
    }

    public ViewGroup d() {
        return this.f5737c;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean e() {
        if (this.f5736b > 0) {
            return true;
        }
        return false;
    }
}
