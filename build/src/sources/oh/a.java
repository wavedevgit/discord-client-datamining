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
    private final TimeInterpolator f40648a = new PathInterpolator(0.1f, 0.1f, 0.0f, 1.0f);

    /* renamed from: b  reason: collision with root package name */
    protected final View f40649b;

    /* renamed from: c  reason: collision with root package name */
    protected final int f40650c;

    /* renamed from: d  reason: collision with root package name */
    protected final int f40651d;

    /* renamed from: e  reason: collision with root package name */
    protected final int f40652e;

    /* renamed from: f  reason: collision with root package name */
    private BackEventCompat f40653f;

    public a(View view) {
        this.f40649b = view;
        Context context = view.getContext();
        this.f40650c = g.f(context, bh.b.L, ReactImageView.REMOTE_IMAGE_FADE_DURATION_MS);
        this.f40651d = g.f(context, bh.b.P, 150);
        this.f40652e = g.f(context, bh.b.O, 100);
    }

    public float a(float f10) {
        return this.f40648a.getInterpolation(f10);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public BackEventCompat b() {
        if (this.f40653f == null) {
            Log.w("MaterialBackHelper", "Must call startBackProgress() and updateBackProgress() before cancelBackProgress()");
        }
        BackEventCompat backEventCompat = this.f40653f;
        this.f40653f = null;
        return backEventCompat;
    }

    public BackEventCompat c() {
        BackEventCompat backEventCompat = this.f40653f;
        this.f40653f = null;
        return backEventCompat;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public void d(BackEventCompat backEventCompat) {
        this.f40653f = backEventCompat;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public BackEventCompat e(BackEventCompat backEventCompat) {
        if (this.f40653f == null) {
            Log.w("MaterialBackHelper", "Must call startBackProgress() before updateBackProgress()");
        }
        BackEventCompat backEventCompat2 = this.f40653f;
        this.f40653f = backEventCompat;
        return backEventCompat2;
    }
}
