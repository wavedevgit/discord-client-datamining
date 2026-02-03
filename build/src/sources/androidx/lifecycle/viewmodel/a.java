package androidx.lifecycle.viewmodel;

import androidx.lifecycle.viewmodel.CreationExtras;
import java.util.Map;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class a extends CreationExtras {
    public a() {
        this(null, 1, null);
    }

    @Override // androidx.lifecycle.viewmodel.CreationExtras
    public Object a(CreationExtras.c key) {
        Intrinsics.checkNotNullParameter(key, "key");
        return b().get(key);
    }

    public final void c(CreationExtras.c key, Object obj) {
        Intrinsics.checkNotNullParameter(key, "key");
        b().put(key, obj);
    }

    public a(Map initialExtras) {
        Intrinsics.checkNotNullParameter(initialExtras, "initialExtras");
        b().putAll(initialExtras);
    }

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public a(CreationExtras initialExtras) {
        this(initialExtras.b());
        Intrinsics.checkNotNullParameter(initialExtras, "initialExtras");
    }

    public /* synthetic */ a(CreationExtras creationExtras, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this((i10 & 1) != 0 ? CreationExtras.b.f4544c : creationExtras);
    }
}
