package kh;

import android.animation.TimeInterpolator;
import android.content.Context;
import android.util.Log;
import android.view.View;
import androidx.activity.BackEventCompat;
import com.facebook.react.views.image.ReactImageView;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class a {

    /* renamed from: a  reason: collision with root package name */
    private final TimeInterpolator f31835a;

    /* renamed from: b  reason: collision with root package name */
    protected final View f31836b;

    /* renamed from: c  reason: collision with root package name */
    protected final int f31837c;

    /* renamed from: d  reason: collision with root package name */
    protected final int f31838d;

    /* renamed from: e  reason: collision with root package name */
    protected final int f31839e;

    /* renamed from: f  reason: collision with root package name */
    private BackEventCompat f31840f;

    public a(View view) {
        this.f31836b = view;
        Context context = view.getContext();
        this.f31835a = g.g(context, zg.b.R, d2.a.a(0.0f, 0.0f, 0.0f, 1.0f));
        this.f31837c = g.f(context, zg.b.H, ReactImageView.REMOTE_IMAGE_FADE_DURATION_MS);
        this.f31838d = g.f(context, zg.b.L, 150);
        this.f31839e = g.f(context, zg.b.K, 100);
    }

    public float a(float f10) {
        return this.f31835a.getInterpolation(f10);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public BackEventCompat b() {
        if (this.f31840f == null) {
            Log.w("MaterialBackHelper", "Must call startBackProgress() and updateBackProgress() before cancelBackProgress()");
        }
        BackEventCompat backEventCompat = this.f31840f;
        this.f31840f = null;
        return backEventCompat;
    }

    public BackEventCompat c() {
        BackEventCompat backEventCompat = this.f31840f;
        this.f31840f = null;
        return backEventCompat;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public void d(BackEventCompat backEventCompat) {
        this.f31840f = backEventCompat;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public BackEventCompat e(BackEventCompat backEventCompat) {
        if (this.f31840f == null) {
            Log.w("MaterialBackHelper", "Must call startBackProgress() before updateBackProgress()");
        }
        BackEventCompat backEventCompat2 = this.f31840f;
        this.f31840f = backEventCompat;
        return backEventCompat2;
    }
}
