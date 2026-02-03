package androidx.transition;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class n {

    /* renamed from: a  reason: collision with root package name */
    private Context f5325a;

    /* renamed from: b  reason: collision with root package name */
    private int f5326b = -1;

    /* renamed from: c  reason: collision with root package name */
    private ViewGroup f5327c;

    /* renamed from: d  reason: collision with root package name */
    private View f5328d;

    /* renamed from: e  reason: collision with root package name */
    private Runnable f5329e;

    /* renamed from: f  reason: collision with root package name */
    private Runnable f5330f;

    public n(ViewGroup viewGroup, View view) {
        this.f5327c = viewGroup;
        this.f5328d = view;
    }

    public static n c(ViewGroup viewGroup) {
        return (n) viewGroup.getTag(l.f5319c);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static void f(ViewGroup viewGroup, n nVar) {
        viewGroup.setTag(l.f5319c, nVar);
    }

    public void a() {
        if (this.f5326b > 0 || this.f5328d != null) {
            d().removeAllViews();
            if (this.f5326b > 0) {
                LayoutInflater.from(this.f5325a).inflate(this.f5326b, this.f5327c);
            } else {
                this.f5327c.addView(this.f5328d);
            }
        }
        Runnable runnable = this.f5329e;
        if (runnable != null) {
            runnable.run();
        }
        f(this.f5327c, this);
    }

    public void b() {
        Runnable runnable;
        if (c(this.f5327c) == this && (runnable = this.f5330f) != null) {
            runnable.run();
        }
    }

    public ViewGroup d() {
        return this.f5327c;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean e() {
        if (this.f5326b > 0) {
            return true;
        }
        return false;
    }
}
