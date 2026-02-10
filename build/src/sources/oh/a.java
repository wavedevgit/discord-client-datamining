package oh;

import android.animation.TimeInterpolator;
import android.content.Context;
import android.util.Log;
import android.view.View;
import android.view.animation.PathInterpolator;
import androidx.activity.BackEventCompat;
import com.facebook.react.views.image.ReactImageView;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class a {

    /* renamed from: a  reason: collision with root package name */
    private final TimeInterpolator f40079a = new PathInterpolator(0.1f, 0.1f, 0.0f, 1.0f);

    /* renamed from: b  reason: collision with root package name */
    protected final View f40080b;

    /* renamed from: c  reason: collision with root package name */
    protected final int f40081c;

    /* renamed from: d  reason: collision with root package name */
    protected final int f40082d;

    /* renamed from: e  reason: collision with root package name */
    protected final int f40083e;

    /* renamed from: f  reason: collision with root package name */
    private BackEventCompat f40084f;

    public a(View view) {
        this.f40080b = view;
        Context context = view.getContext();
        this.f40081c = g.f(context, bh.b.L, ReactImageView.REMOTE_IMAGE_FADE_DURATION_MS);
        this.f40082d = g.f(context, bh.b.P, 150);
        this.f40083e = g.f(context, bh.b.O, 100);
    }

    public float a(float f10) {
        return this.f40079a.getInterpolation(f10);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public BackEventCompat b() {
        if (this.f40084f == null) {
            Log.w("MaterialBackHelper", "Must call startBackProgress() and updateBackProgress() before cancelBackProgress()");
        }
        BackEventCompat backEventCompat = this.f40084f;
        this.f40084f = null;
        return backEventCompat;
    }

    public BackEventCompat c() {
        BackEventCompat backEventCompat = this.f40084f;
        this.f40084f = null;
        return backEventCompat;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public void d(BackEventCompat backEventCompat) {
        this.f40084f = backEventCompat;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public BackEventCompat e(BackEventCompat backEventCompat) {
        if (this.f40084f == null) {
            Log.w("MaterialBackHelper", "Must call startBackProgress() before updateBackProgress()");
        }
        BackEventCompat backEventCompat2 = this.f40084f;
        this.f40084f = backEventCompat;
        return backEventCompat2;
    }
}
