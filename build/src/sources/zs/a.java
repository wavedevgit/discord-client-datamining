package zs;

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
    private final String f56071a;

    /* renamed from: b  reason: collision with root package name */
    private List f56072b;

    /* renamed from: c  reason: collision with root package name */
    private final List f56073c;

    /* renamed from: d  reason: collision with root package name */
    private final Set f56074d;

    /* renamed from: e  reason: collision with root package name */
    private final List f56075e;

    /* renamed from: f  reason: collision with root package name */
    private final List f56076f;

    /* renamed from: g  reason: collision with root package name */
    private final List f56077g;

    public a(String serialName) {
        Intrinsics.checkNotNullParameter(serialName, "serialName");
        this.f56071a = serialName;
        this.f56072b = CollectionsKt.l();
        this.f56073c = new ArrayList();
        this.f56074d = new HashSet();
        this.f56075e = new ArrayList();
        this.f56076f = new ArrayList();
        this.f56077g = new ArrayList();
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
        if (this.f56074d.add(elementName)) {
            this.f56073c.add(elementName);
            this.f56075e.add(descriptor);
            this.f56076f.add(annotations);
            this.f56077g.add(Boolean.valueOf(z10));
            return;
        }
        throw new IllegalArgumentException(("Element with name '" + elementName + "' is already registered in " + this.f56071a).toString());
    }

    public final List c() {
        return this.f56072b;
    }

    public final List d() {
        return this.f56076f;
    }

    public final List e() {
        return this.f56075e;
    }

    public final List f() {
        return this.f56073c;
    }

    public final List g() {
        return this.f56077g;
    }

    public final void h(List list) {
        Intrinsics.checkNotNullParameter(list, "<set-?>");
        this.f56072b = list;
    }
}
