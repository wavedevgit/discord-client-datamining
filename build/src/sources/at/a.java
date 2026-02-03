package at;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.descriptors.SerialDescriptor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class a {

    /* renamed from: a  reason: collision with root package name */
    private final String f6058a;

    /* renamed from: b  reason: collision with root package name */
    private List f6059b;

    /* renamed from: c  reason: collision with root package name */
    private final List f6060c;

    /* renamed from: d  reason: collision with root package name */
    private final Set f6061d;

    /* renamed from: e  reason: collision with root package name */
    private final List f6062e;

    /* renamed from: f  reason: collision with root package name */
    private final List f6063f;

    /* renamed from: g  reason: collision with root package name */
    private final List f6064g;

    public a(String serialName) {
        Intrinsics.checkNotNullParameter(serialName, "serialName");
        this.f6058a = serialName;
        this.f6059b = CollectionsKt.l();
        this.f6060c = new ArrayList();
        this.f6061d = new HashSet();
        this.f6062e = new ArrayList();
        this.f6063f = new ArrayList();
        this.f6064g = new ArrayList();
    }

    public static /* synthetic */ void b(a aVar, String str, SerialDescriptor serialDescriptor, List list, boolean z10, int i10, Object obj) {
        if ((i10 & 4) != 0) {
            list = CollectionsKt.l();
        }
        if ((i10 & 8) != 0) {
            z10 = false;
        }
        aVar.a(str, serialDescriptor, list, z10);
    }

    public final void a(String elementName, SerialDescriptor descriptor, List annotations, boolean z10) {
        Intrinsics.checkNotNullParameter(elementName, "elementName");
        Intrinsics.checkNotNullParameter(descriptor, "descriptor");
        Intrinsics.checkNotNullParameter(annotations, "annotations");
        if (this.f6061d.add(elementName)) {
            this.f6060c.add(elementName);
            this.f6062e.add(descriptor);
            this.f6063f.add(annotations);
            this.f6064g.add(Boolean.valueOf(z10));
            return;
        }
        throw new IllegalArgumentException(("Element with name '" + elementName + "' is already registered in " + this.f6058a).toString());
    }

    public final List c() {
        return this.f6059b;
    }

    public final List d() {
        return this.f6063f;
    }

    public final List e() {
        return this.f6062e;
    }

    public final List f() {
        return this.f6060c;
    }

    public final List g() {
        return this.f6064g;
    }

    public final void h(List list) {
        Intrinsics.checkNotNullParameter(list, "<set-?>");
        this.f6059b = list;
    }
}
