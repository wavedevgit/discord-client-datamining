package jh;

import android.animation.TimeInterpolator;
import android.content.Context;
import android.util.Log;
import android.view.View;
import androidx.activity.BackEventCompat;
import com.facebook.react.views.image.ReactImageView;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class a {

    /* renamed from: a  reason: collision with root package name */
    private final TimeInterpolator f31764a;

    /* renamed from: b  reason: collision with root package name */
    protected final View f31765b;

    /* renamed from: c  reason: collision with root package name */
    protected final int f31766c;

    /* renamed from: d  reason: collision with root package name */
    protected final int f31767d;

    /* renamed from: e  reason: collision with root package name */
    protected final int f31768e;

    /* renamed from: f  reason: collision with root package name */
    private BackEventCompat f31769f;

    public a(View view) {
        this.f31765b = view;
        Context context = view.getContext();
        this.f31764a = g.g(context, yg.b.R, d2.a.a(0.0f, 0.0f, 0.0f, 1.0f));
        this.f31766c = g.f(context, yg.b.H, ReactImageView.REMOTE_IMAGE_FADE_DURATION_MS);
        this.f31767d = g.f(context, yg.b.L, 150);
        this.f31768e = g.f(context, yg.b.K, 100);
    }

    public float a(float f10) {
        return this.f31764a.getInterpolation(f10);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public BackEventCompat b() {
        if (this.f31769f == null) {
            Log.w("MaterialBackHelper", "Must call startBackProgress() and updateBackProgress() before cancelBackProgress()");
        }
        BackEventCompat backEventCompat = this.f31769f;
        this.f31769f = null;
        return backEventCompat;
    }

    public BackEventCompat c() {
        BackEventCompat backEventCompat = this.f31769f;
        this.f31769f = null;
        return backEventCompat;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public void d(BackEventCompat backEventCompat) {
        this.f31769f = backEventCompat;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public BackEventCompat e(BackEventCompat backEventCompat) {
        if (this.f31769f == null) {
            Log.w("MaterialBackHelper", "Must call startBackProgress() before updateBackProgress()");
        }
        BackEventCompat backEventCompat2 = this.f31769f;
        this.f31769f = backEventCompat;
        return backEventCompat2;
    }
}
