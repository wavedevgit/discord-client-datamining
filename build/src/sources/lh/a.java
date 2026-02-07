package lh;

import android.animation.TimeInterpolator;
import android.content.Context;
import android.util.Log;
import android.view.View;
import androidx.activity.BackEventCompat;
import com.facebook.react.views.image.ReactImageView;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class a {

    /* renamed from: a  reason: collision with root package name */
    private final TimeInterpolator f36276a;

    /* renamed from: b  reason: collision with root package name */
    protected final View f36277b;

    /* renamed from: c  reason: collision with root package name */
    protected final int f36278c;

    /* renamed from: d  reason: collision with root package name */
    protected final int f36279d;

    /* renamed from: e  reason: collision with root package name */
    protected final int f36280e;

    /* renamed from: f  reason: collision with root package name */
    private BackEventCompat f36281f;

    public a(View view) {
        this.f36277b = view;
        Context context = view.getContext();
        this.f36276a = g.g(context, ah.b.R, d2.a.a(0.0f, 0.0f, 0.0f, 1.0f));
        this.f36278c = g.f(context, ah.b.H, ReactImageView.REMOTE_IMAGE_FADE_DURATION_MS);
        this.f36279d = g.f(context, ah.b.L, 150);
        this.f36280e = g.f(context, ah.b.K, 100);
    }

    public float a(float f10) {
        return this.f36276a.getInterpolation(f10);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public BackEventCompat b() {
        if (this.f36281f == null) {
            Log.w("MaterialBackHelper", "Must call startBackProgress() and updateBackProgress() before cancelBackProgress()");
        }
        BackEventCompat backEventCompat = this.f36281f;
        this.f36281f = null;
        return backEventCompat;
    }

    public BackEventCompat c() {
        BackEventCompat backEventCompat = this.f36281f;
        this.f36281f = null;
        return backEventCompat;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public void d(BackEventCompat backEventCompat) {
        this.f36281f = backEventCompat;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public BackEventCompat e(BackEventCompat backEventCompat) {
        if (this.f36281f == null) {
            Log.w("MaterialBackHelper", "Must call startBackProgress() before updateBackProgress()");
        }
        BackEventCompat backEventCompat2 = this.f36281f;
        this.f36281f = backEventCompat;
        return backEventCompat2;
    }
}
