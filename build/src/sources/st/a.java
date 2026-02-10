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
    private final String f48348a;

    /* renamed from: b  reason: collision with root package name */
    private List f48349b;

    /* renamed from: c  reason: collision with root package name */
    private final List f48350c;

    /* renamed from: d  reason: collision with root package name */
    private final Set f48351d;

    /* renamed from: e  reason: collision with root package name */
    private final List f48352e;

    /* renamed from: f  reason: collision with root package name */
    private final List f48353f;

    /* renamed from: g  reason: collision with root package name */
    private final List f48354g;

    public a(String serialName) {
        Intrinsics.checkNotNullParameter(serialName, "serialName");
        this.f48348a = serialName;
        this.f48349b = CollectionsKt.l();
        this.f48350c = new ArrayList();
        this.f48351d = new HashSet();
        this.f48352e = new ArrayList();
        this.f48353f = new ArrayList();
        this.f48354g = new ArrayList();
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
        if (this.f48351d.add(elementName)) {
            this.f48350c.add(elementName);
            this.f48352e.add(descriptor);
            this.f48353f.add(annotations);
            this.f48354g.add(Boolean.valueOf(z10));
            return;
        }
        throw new IllegalArgumentException(("Element with name '" + elementName + "' is already registered in " + this.f48348a).toString());
    }

    public final List c() {
        return this.f48349b;
    }

    public final List d() {
        return this.f48353f;
    }

    public final List e() {
        return this.f48352e;
    }

    public final List f() {
        return this.f48350c;
    }

    public final List g() {
        return this.f48354g;
    }

    public final void h(List list) {
        Intrinsics.checkNotNullParameter(list, "<set-?>");
        this.f48349b = list;
    }
}
