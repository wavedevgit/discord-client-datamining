package st;

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
    private final String f48917a;

    /* renamed from: b  reason: collision with root package name */
    private List f48918b;

    /* renamed from: c  reason: collision with root package name */
    private final List f48919c;

    /* renamed from: d  reason: collision with root package name */
    private final Set f48920d;

    /* renamed from: e  reason: collision with root package name */
    private final List f48921e;

    /* renamed from: f  reason: collision with root package name */
    private final List f48922f;

    /* renamed from: g  reason: collision with root package name */
    private final List f48923g;

    public a(String serialName) {
        Intrinsics.checkNotNullParameter(serialName, "serialName");
        this.f48917a = serialName;
        this.f48918b = CollectionsKt.l();
        this.f48919c = new ArrayList();
        this.f48920d = new HashSet();
        this.f48921e = new ArrayList();
        this.f48922f = new ArrayList();
        this.f48923g = new ArrayList();
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
        if (this.f48920d.add(elementName)) {
            this.f48919c.add(elementName);
            this.f48921e.add(descriptor);
            this.f48922f.add(annotations);
            this.f48923g.add(Boolean.valueOf(z10));
            return;
        }
        throw new IllegalArgumentException(("Element with name '" + elementName + "' is already registered in " + this.f48917a).toString());
    }

    public final List c() {
        return this.f48918b;
    }

    public final List d() {
        return this.f48922f;
    }

    public final List e() {
        return this.f48921e;
    }

    public final List f() {
        return this.f48919c;
    }

    public final List g() {
        return this.f48923g;
    }

    public final void h(List list) {
        Intrinsics.checkNotNullParameter(list, "<set-?>");
        this.f48918b = list;
    }
}
