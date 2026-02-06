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
    private final TimeInterpolator f36228a;

    /* renamed from: b  reason: collision with root package name */
    protected final View f36229b;

    /* renamed from: c  reason: collision with root package name */
    protected final int f36230c;

    /* renamed from: d  reason: collision with root package name */
    protected final int f36231d;

    /* renamed from: e  reason: collision with root package name */
    protected final int f36232e;

    /* renamed from: f  reason: collision with root package name */
    private BackEventCompat f36233f;

    public a(View view) {
        this.f36229b = view;
        Context context = view.getContext();
        this.f36228a = g.g(context, ah.b.R, d2.a.a(0.0f, 0.0f, 0.0f, 1.0f));
        this.f36230c = g.f(context, ah.b.H, ReactImageView.REMOTE_IMAGE_FADE_DURATION_MS);
        this.f36231d = g.f(context, ah.b.L, 150);
        this.f36232e = g.f(context, ah.b.K, 100);
    }

    public float a(float f10) {
        return this.f36228a.getInterpolation(f10);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public BackEventCompat b() {
        if (this.f36233f == null) {
            Log.w("MaterialBackHelper", "Must call startBackProgress() and updateBackProgress() before cancelBackProgress()");
        }
        BackEventCompat backEventCompat = this.f36233f;
        this.f36233f = null;
        return backEventCompat;
    }

    public BackEventCompat c() {
        BackEventCompat backEventCompat = this.f36233f;
        this.f36233f = null;
        return backEventCompat;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public void d(BackEventCompat backEventCompat) {
        this.f36233f = backEventCompat;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public BackEventCompat e(BackEventCompat backEventCompat) {
        if (this.f36233f == null) {
            Log.w("MaterialBackHelper", "Must call startBackProgress() before updateBackProgress()");
        }
        BackEventCompat backEventCompat2 = this.f36233f;
        this.f36233f = backEventCompat;
        return backEventCompat2;
    }
}
