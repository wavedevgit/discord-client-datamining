package androidx.transition;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class n {

    /* renamed from: a  reason: collision with root package name */
    private Context f5432a;

    /* renamed from: b  reason: collision with root package name */
    private int f5433b = -1;

    /* renamed from: c  reason: collision with root package name */
    private ViewGroup f5434c;

    /* renamed from: d  reason: collision with root package name */
    private View f5435d;

    /* renamed from: e  reason: collision with root package name */
    private Runnable f5436e;

    /* renamed from: f  reason: collision with root package name */
    private Runnable f5437f;

    public n(ViewGroup viewGroup, View view) {
        this.f5434c = viewGroup;
        this.f5435d = view;
    }

    public static n c(ViewGroup viewGroup) {
        return (n) viewGroup.getTag(l.f5426c);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static void f(ViewGroup viewGroup, n nVar) {
        viewGroup.setTag(l.f5426c, nVar);
    }

    public void a() {
        if (this.f5433b > 0 || this.f5435d != null) {
            d().removeAllViews();
            if (this.f5433b > 0) {
                LayoutInflater.from(this.f5432a).inflate(this.f5433b, this.f5434c);
            } else {
                this.f5434c.addView(this.f5435d);
            }
        }
        Runnable runnable = this.f5436e;
        if (runnable != null) {
            runnable.run();
        }
        f(this.f5434c, this);
    }

    public void b() {
        Runnable runnable;
        if (c(this.f5434c) == this && (runnable = this.f5437f) != null) {
            runnable.run();
        }
    }

    public ViewGroup d() {
        return this.f5434c;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean e() {
        if (this.f5433b > 0) {
            return true;
        }
        return false;
    }
}
