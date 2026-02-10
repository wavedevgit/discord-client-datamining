package mh;

import android.animation.TimeInterpolator;
import android.content.Context;
import android.util.Log;
import android.view.View;
import androidx.activity.BackEventCompat;
import com.facebook.react.views.image.ReactImageView;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class a {

    /* renamed from: a  reason: collision with root package name */
    private final TimeInterpolator f37106a;

    /* renamed from: b  reason: collision with root package name */
    protected final View f37107b;

    /* renamed from: c  reason: collision with root package name */
    protected final int f37108c;

    /* renamed from: d  reason: collision with root package name */
    protected final int f37109d;

    /* renamed from: e  reason: collision with root package name */
    protected final int f37110e;

    /* renamed from: f  reason: collision with root package name */
    private BackEventCompat f37111f;

    public a(View view) {
        this.f37107b = view;
        Context context = view.getContext();
        this.f37106a = g.g(context, bh.b.R, d2.a.a(0.0f, 0.0f, 0.0f, 1.0f));
        this.f37108c = g.f(context, bh.b.H, ReactImageView.REMOTE_IMAGE_FADE_DURATION_MS);
        this.f37109d = g.f(context, bh.b.L, 150);
        this.f37110e = g.f(context, bh.b.K, 100);
    }

    public float a(float f10) {
        return this.f37106a.getInterpolation(f10);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public BackEventCompat b() {
        if (this.f37111f == null) {
            Log.w("MaterialBackHelper", "Must call startBackProgress() and updateBackProgress() before cancelBackProgress()");
        }
        BackEventCompat backEventCompat = this.f37111f;
        this.f37111f = null;
        return backEventCompat;
    }

    public BackEventCompat c() {
        BackEventCompat backEventCompat = this.f37111f;
        this.f37111f = null;
        return backEventCompat;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public void d(BackEventCompat backEventCompat) {
        this.f37111f = backEventCompat;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public BackEventCompat e(BackEventCompat backEventCompat) {
        if (this.f37111f == null) {
            Log.w("MaterialBackHelper", "Must call startBackProgress() before updateBackProgress()");
        }
        BackEventCompat backEventCompat2 = this.f37111f;
        this.f37111f = backEventCompat;
        return backEventCompat2;
    }
}
