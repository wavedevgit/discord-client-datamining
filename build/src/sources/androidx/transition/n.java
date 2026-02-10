package androidx.transition;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class n {

    /* renamed from: a  reason: collision with root package name */
    private Context f5442a;

    /* renamed from: b  reason: collision with root package name */
    private int f5443b = -1;

    /* renamed from: c  reason: collision with root package name */
    private ViewGroup f5444c;

    /* renamed from: d  reason: collision with root package name */
    private View f5445d;

    /* renamed from: e  reason: collision with root package name */
    private Runnable f5446e;

    /* renamed from: f  reason: collision with root package name */
    private Runnable f5447f;

    public n(ViewGroup viewGroup, View view) {
        this.f5444c = viewGroup;
        this.f5445d = view;
    }

    public static n c(ViewGroup viewGroup) {
        return (n) viewGroup.getTag(l.f5436c);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static void f(ViewGroup viewGroup, n nVar) {
        viewGroup.setTag(l.f5436c, nVar);
    }

    public void a() {
        if (this.f5443b > 0 || this.f5445d != null) {
            d().removeAllViews();
            if (this.f5443b > 0) {
                LayoutInflater.from(this.f5442a).inflate(this.f5443b, this.f5444c);
            } else {
                this.f5444c.addView(this.f5445d);
            }
        }
        Runnable runnable = this.f5446e;
        if (runnable != null) {
            runnable.run();
        }
        f(this.f5444c, this);
    }

    public void b() {
        Runnable runnable;
        if (c(this.f5444c) == this && (runnable = this.f5447f) != null) {
            runnable.run();
        }
    }

    public ViewGroup d() {
        return this.f5444c;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean e() {
        if (this.f5443b > 0) {
            return true;
        }
        return false;
    }
}
