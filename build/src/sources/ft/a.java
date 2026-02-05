package ft;

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
    private final String f23463a;

    /* renamed from: b  reason: collision with root package name */
    private List f23464b;

    /* renamed from: c  reason: collision with root package name */
    private final List f23465c;

    /* renamed from: d  reason: collision with root package name */
    private final Set f23466d;

    /* renamed from: e  reason: collision with root package name */
    private final List f23467e;

    /* renamed from: f  reason: collision with root package name */
    private final List f23468f;

    /* renamed from: g  reason: collision with root package name */
    private final List f23469g;

    public a(String serialName) {
        Intrinsics.checkNotNullParameter(serialName, "serialName");
        this.f23463a = serialName;
        this.f23464b = CollectionsKt.l();
        this.f23465c = new ArrayList();
        this.f23466d = new HashSet();
        this.f23467e = new ArrayList();
        this.f23468f = new ArrayList();
        this.f23469g = new ArrayList();
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
        if (this.f23466d.add(elementName)) {
            this.f23465c.add(elementName);
            this.f23467e.add(descriptor);
            this.f23468f.add(annotations);
            this.f23469g.add(Boolean.valueOf(z10));
            return;
        }
        throw new IllegalArgumentException(("Element with name '" + elementName + "' is already registered in " + this.f23463a).toString());
    }

    public final List c() {
        return this.f23464b;
    }

    public final List d() {
        return this.f23468f;
    }

    public final List e() {
        return this.f23467e;
    }

    public final List f() {
        return this.f23465c;
    }

    public final List g() {
        return this.f23469g;
    }

    public final void h(List list) {
        Intrinsics.checkNotNullParameter(list, "<set-?>");
        this.f23464b = list;
    }
}
