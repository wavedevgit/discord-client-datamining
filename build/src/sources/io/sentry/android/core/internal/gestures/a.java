package io.sentry.android.core.internal.gestures;

import android.content.res.Resources;
import android.view.View;
import android.widget.AbsListView;
import android.widget.ScrollView;
import androidx.core.view.ScrollingView;
import io.sentry.android.core.internal.util.k;
import io.sentry.internal.gestures.b;
import io.sentry.util.r;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a implements io.sentry.internal.gestures.a {

    /* renamed from: a  reason: collision with root package name */
    private final r f28894a;

    public a(r rVar) {
        this.f28894a = rVar;
    }

    private io.sentry.internal.gestures.b b(View view) {
        try {
            return new io.sentry.internal.gestures.b(view, k.a(view), i.b(view), null, "old_view_system");
        } catch (Resources.NotFoundException unused) {
            return null;
        }
    }

    private static boolean c(View view, boolean z10) {
        if (!z10) {
            return false;
        }
        return ScrollingView.class.isAssignableFrom(view.getClass());
    }

    private static boolean d(View view, boolean z10) {
        if ((c(view, z10) || AbsListView.class.isAssignableFrom(view.getClass()) || ScrollView.class.isAssignableFrom(view.getClass())) && view.getVisibility() == 0) {
            return true;
        }
        return false;
    }

    private static boolean e(View view) {
        if (view.isClickable() && view.getVisibility() == 0) {
            return true;
        }
        return false;
    }

    @Override // io.sentry.internal.gestures.a
    public io.sentry.internal.gestures.b a(Object obj, float f10, float f11, b.a aVar) {
        if (!(obj instanceof View)) {
            return null;
        }
        View view = (View) obj;
        if (aVar == b.a.CLICKABLE && e(view)) {
            return b(view);
        }
        if (aVar != b.a.SCROLLABLE || !d(view, ((Boolean) this.f28894a.a()).booleanValue())) {
            return null;
        }
        return b(view);
    }
}
