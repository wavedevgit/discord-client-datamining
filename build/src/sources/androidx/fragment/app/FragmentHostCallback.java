package androidx.fragment.app;

import android.app.Activity;
import android.content.Context;
import android.content.Intent;
import android.content.IntentSender;
import android.os.Bundle;
import android.os.Handler;
import android.view.LayoutInflater;
import android.view.View;
import java.io.FileDescriptor;
import java.io.PrintWriter;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class FragmentHostCallback extends FragmentContainer {

    /* renamed from: d  reason: collision with root package name */
    private final Activity f4533d;

    /* renamed from: e  reason: collision with root package name */
    private final Context f4534e;

    /* renamed from: i  reason: collision with root package name */
    private final Handler f4535i;

    /* renamed from: o  reason: collision with root package name */
    private final int f4536o;

    /* renamed from: p  reason: collision with root package name */
    private final FragmentManager f4537p;

    public FragmentHostCallback(Activity activity, Context context, Handler handler, int i10) {
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(handler, "handler");
        this.f4533d = activity;
        this.f4534e = context;
        this.f4535i = handler;
        this.f4536o = i10;
        this.f4537p = new e0();
    }

    @Override // androidx.fragment.app.FragmentContainer
    public View c(int i10) {
        return null;
    }

    @Override // androidx.fragment.app.FragmentContainer
    public boolean e() {
        return true;
    }

    public final Activity f() {
        return this.f4533d;
    }

    public final Context g() {
        return this.f4534e;
    }

    public final FragmentManager h() {
        return this.f4537p;
    }

    public final Handler i() {
        return this.f4535i;
    }

    public void j(String prefix, FileDescriptor fileDescriptor, PrintWriter writer, String[] strArr) {
        Intrinsics.checkNotNullParameter(prefix, "prefix");
        Intrinsics.checkNotNullParameter(writer, "writer");
    }

    public abstract Object k();

    public LayoutInflater l() {
        LayoutInflater from = LayoutInflater.from(this.f4534e);
        Intrinsics.checkNotNullExpressionValue(from, "from(context)");
        return from;
    }

    public void m(Fragment fragment, String[] permissions, int i10) {
        Intrinsics.checkNotNullParameter(fragment, "fragment");
        Intrinsics.checkNotNullParameter(permissions, "permissions");
    }

    public boolean n(String permission) {
        Intrinsics.checkNotNullParameter(permission, "permission");
        return false;
    }

    public void o(Fragment fragment, Intent intent, int i10, Bundle bundle) {
        Intrinsics.checkNotNullParameter(fragment, "fragment");
        Intrinsics.checkNotNullParameter(intent, "intent");
        if (i10 == -1) {
            androidx.core.content.a.o(this.f4534e, intent, bundle);
            return;
        }
        throw new IllegalStateException("Starting activity with a requestCode requires a FragmentActivity host");
    }

    public void p(Fragment fragment, IntentSender intent, int i10, Intent intent2, int i11, int i12, int i13, Bundle bundle) {
        Intrinsics.checkNotNullParameter(fragment, "fragment");
        Intrinsics.checkNotNullParameter(intent, "intent");
        if (i10 == -1) {
            Activity activity = this.f4533d;
            if (activity != null) {
                androidx.core.app.b.A(activity, intent, i10, intent2, i11, i12, i13, bundle);
                return;
            }
            throw new IllegalStateException("Starting intent sender with a requestCode requires a FragmentActivity host");
        }
        throw new IllegalStateException("Starting intent sender with a requestCode requires a FragmentActivity host");
    }

    public void q() {
    }

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public FragmentHostCallback(FragmentActivity activity) {
        this(activity, activity, new Handler(), 0);
        Intrinsics.checkNotNullParameter(activity, "activity");
    }
}
