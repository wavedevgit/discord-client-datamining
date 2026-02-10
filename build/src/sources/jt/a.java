package jt;

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
    private final String f30464a;

    /* renamed from: b  reason: collision with root package name */
    private List f30465b;

    /* renamed from: c  reason: collision with root package name */
    private final List f30466c;

    /* renamed from: d  reason: collision with root package name */
    private final Set f30467d;

    /* renamed from: e  reason: collision with root package name */
    private final List f30468e;

    /* renamed from: f  reason: collision with root package name */
    private final List f30469f;

    /* renamed from: g  reason: collision with root package name */
    private final List f30470g;

    public a(String serialName) {
        Intrinsics.checkNotNullParameter(serialName, "serialName");
        this.f30464a = serialName;
        this.f30465b = CollectionsKt.l();
        this.f30466c = new ArrayList();
        this.f30467d = new HashSet();
        this.f30468e = new ArrayList();
        this.f30469f = new ArrayList();
        this.f30470g = new ArrayList();
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
        if (this.f30467d.add(elementName)) {
            this.f30466c.add(elementName);
            this.f30468e.add(descriptor);
            this.f30469f.add(annotations);
            this.f30470g.add(Boolean.valueOf(z10));
            return;
        }
        throw new IllegalArgumentException(("Element with name '" + elementName + "' is already registered in " + this.f30464a).toString());
    }

    public final List c() {
        return this.f30465b;
    }

    public final List d() {
        return this.f30469f;
    }

    public final List e() {
        return this.f30468e;
    }

    public final List f() {
        return this.f30466c;
    }

    public final List g() {
        return this.f30470g;
    }

    public final void h(List list) {
        Intrinsics.checkNotNullParameter(list, "<set-?>");
        this.f30465b = list;
    }
}
