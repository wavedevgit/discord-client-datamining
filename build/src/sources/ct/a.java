package ct;

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
    private final String f19822a;

    /* renamed from: b  reason: collision with root package name */
    private List f19823b;

    /* renamed from: c  reason: collision with root package name */
    private final List f19824c;

    /* renamed from: d  reason: collision with root package name */
    private final Set f19825d;

    /* renamed from: e  reason: collision with root package name */
    private final List f19826e;

    /* renamed from: f  reason: collision with root package name */
    private final List f19827f;

    /* renamed from: g  reason: collision with root package name */
    private final List f19828g;

    public a(String serialName) {
        Intrinsics.checkNotNullParameter(serialName, "serialName");
        this.f19822a = serialName;
        this.f19823b = CollectionsKt.l();
        this.f19824c = new ArrayList();
        this.f19825d = new HashSet();
        this.f19826e = new ArrayList();
        this.f19827f = new ArrayList();
        this.f19828g = new ArrayList();
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
        if (this.f19825d.add(elementName)) {
            this.f19824c.add(elementName);
            this.f19826e.add(descriptor);
            this.f19827f.add(annotations);
            this.f19828g.add(Boolean.valueOf(z10));
            return;
        }
        throw new IllegalArgumentException(("Element with name '" + elementName + "' is already registered in " + this.f19822a).toString());
    }

    public final List c() {
        return this.f19823b;
    }

    public final List d() {
        return this.f19827f;
    }

    public final List e() {
        return this.f19826e;
    }

    public final List f() {
        return this.f19824c;
    }

    public final List g() {
        return this.f19828g;
    }

    public final void h(List list) {
        Intrinsics.checkNotNullParameter(list, "<set-?>");
        this.f19823b = list;
    }
}
