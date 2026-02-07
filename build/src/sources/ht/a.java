package ht;

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
    private final String f26506a;

    /* renamed from: b  reason: collision with root package name */
    private List f26507b;

    /* renamed from: c  reason: collision with root package name */
    private final List f26508c;

    /* renamed from: d  reason: collision with root package name */
    private final Set f26509d;

    /* renamed from: e  reason: collision with root package name */
    private final List f26510e;

    /* renamed from: f  reason: collision with root package name */
    private final List f26511f;

    /* renamed from: g  reason: collision with root package name */
    private final List f26512g;

    public a(String serialName) {
        Intrinsics.checkNotNullParameter(serialName, "serialName");
        this.f26506a = serialName;
        this.f26507b = CollectionsKt.l();
        this.f26508c = new ArrayList();
        this.f26509d = new HashSet();
        this.f26510e = new ArrayList();
        this.f26511f = new ArrayList();
        this.f26512g = new ArrayList();
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
        if (this.f26509d.add(elementName)) {
            this.f26508c.add(elementName);
            this.f26510e.add(descriptor);
            this.f26511f.add(annotations);
            this.f26512g.add(Boolean.valueOf(z10));
            return;
        }
        throw new IllegalArgumentException(("Element with name '" + elementName + "' is already registered in " + this.f26506a).toString());
    }

    public final List c() {
        return this.f26507b;
    }

    public final List d() {
        return this.f26511f;
    }

    public final List e() {
        return this.f26510e;
    }

    public final List f() {
        return this.f26508c;
    }

    public final List g() {
        return this.f26512g;
    }

    public final void h(List list) {
        Intrinsics.checkNotNullParameter(list, "<set-?>");
        this.f26507b = list;
    }
}
