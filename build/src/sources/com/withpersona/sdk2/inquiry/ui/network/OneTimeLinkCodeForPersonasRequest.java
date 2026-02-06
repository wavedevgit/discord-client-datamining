package com.withpersona.sdk2.inquiry.ui.network;

import com.facebook.react.devsupport.StackTraceHelper;
import com.squareup.moshi.i;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
@i(generateAdapter = true)
@kotlin.Metadata(d1 = {"\u0000\u0010\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\u0018\u0002\n\u0002\b\u000b\b\u0007\u0018\u0000 \t2\u00020\u0001:\u0004\n\u000b\f\u0006B\u000f\u0012\u0006\u0010\u0003\u001a\u00020\u0002¢\u0006\u0004\b\u0004\u0010\u0005R\u0017\u0010\u0003\u001a\u00020\u00028\u0006¢\u0006\f\n\u0004\b\u0006\u0010\u0007\u001a\u0004\b\u0006\u0010\b¨\u0006\r"}, d2 = {"Lcom/withpersona/sdk2/inquiry/ui/network/OneTimeLinkCodeForPersonasRequest;", "", "Lcom/withpersona/sdk2/inquiry/ui/network/OneTimeLinkCodeForPersonasRequest$Meta;", "meta", "<init>", "(Lcom/withpersona/sdk2/inquiry/ui/network/OneTimeLinkCodeForPersonasRequest$Meta;)V", "a", "Lcom/withpersona/sdk2/inquiry/ui/network/OneTimeLinkCodeForPersonasRequest$Meta;", "()Lcom/withpersona/sdk2/inquiry/ui/network/OneTimeLinkCodeForPersonasRequest$Meta;", "b", "Meta", "TransitionParams", "NamedComponentParam", "ui_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class OneTimeLinkCodeForPersonasRequest {

    /* renamed from: b  reason: collision with root package name */
    public static final a f19809b = new a(null);

    /* renamed from: a  reason: collision with root package name */
    private final Meta f19810a;

    @i(generateAdapter = true)
    @kotlin.Metadata(d1 = {"\u0000\u0010\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\u0018\u0002\n\u0002\b\u0007\b\u0007\u0018\u00002\u00020\u0001B\u000f\u0012\u0006\u0010\u0003\u001a\u00020\u0002¢\u0006\u0004\b\u0004\u0010\u0005R\u0017\u0010\u0003\u001a\u00020\u00028\u0006¢\u0006\f\n\u0004\b\u0006\u0010\u0007\u001a\u0004\b\u0006\u0010\b¨\u0006\t"}, d2 = {"Lcom/withpersona/sdk2/inquiry/ui/network/OneTimeLinkCodeForPersonasRequest$Meta;", "", "Lcom/withpersona/sdk2/inquiry/ui/network/OneTimeLinkCodeForPersonasRequest$TransitionParams;", "transitionParams", "<init>", "(Lcom/withpersona/sdk2/inquiry/ui/network/OneTimeLinkCodeForPersonasRequest$TransitionParams;)V", "a", "Lcom/withpersona/sdk2/inquiry/ui/network/OneTimeLinkCodeForPersonasRequest$TransitionParams;", "()Lcom/withpersona/sdk2/inquiry/ui/network/OneTimeLinkCodeForPersonasRequest$TransitionParams;", "ui_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class Meta {

        /* renamed from: a  reason: collision with root package name */
        private final TransitionParams f19811a;

        public Meta(TransitionParams transitionParams) {
            Intrinsics.checkNotNullParameter(transitionParams, "transitionParams");
            this.f19811a = transitionParams;
        }

        public final TransitionParams a() {
            return this.f19811a;
        }
    }

    @i(generateAdapter = true)
    @kotlin.Metadata(d1 = {"\u0000&\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0010\b\n\u0002\b\u0003\n\u0002\u0010\u000b\n\u0002\b\b\b\u0087\b\u0018\u00002\u00020\u0001B\u0017\u0012\u0006\u0010\u0003\u001a\u00020\u0002\u0012\u0006\u0010\u0005\u001a\u00020\u0004¢\u0006\u0004\b\u0006\u0010\u0007J\u0010\u0010\b\u001a\u00020\u0002HÖ\u0001¢\u0006\u0004\b\b\u0010\tJ\u0010\u0010\u000b\u001a\u00020\nHÖ\u0001¢\u0006\u0004\b\u000b\u0010\fJ\u001a\u0010\u000f\u001a\u00020\u000e2\b\u0010\r\u001a\u0004\u0018\u00010\u0001HÖ\u0003¢\u0006\u0004\b\u000f\u0010\u0010R\u0017\u0010\u0003\u001a\u00020\u00028\u0006¢\u0006\f\n\u0004\b\u0011\u0010\u0012\u001a\u0004\b\u0011\u0010\tR\u0017\u0010\u0005\u001a\u00020\u00048\u0006¢\u0006\f\n\u0004\b\u0013\u0010\u0014\u001a\u0004\b\u0013\u0010\u0015¨\u0006\u0016"}, d2 = {"Lcom/withpersona/sdk2/inquiry/ui/network/OneTimeLinkCodeForPersonasRequest$NamedComponentParam;", "", "", StackTraceHelper.NAME_KEY, "Lcom/withpersona/sdk2/inquiry/ui/network/ComponentParam;", "value", "<init>", "(Ljava/lang/String;Lcom/withpersona/sdk2/inquiry/ui/network/ComponentParam;)V", "toString", "()Ljava/lang/String;", "", "hashCode", "()I", "other", "", "equals", "(Ljava/lang/Object;)Z", "a", "Ljava/lang/String;", "b", "Lcom/withpersona/sdk2/inquiry/ui/network/ComponentParam;", "()Lcom/withpersona/sdk2/inquiry/ui/network/ComponentParam;", "ui_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class NamedComponentParam {

        /* renamed from: a  reason: collision with root package name */
        private final String f19812a;

        /* renamed from: b  reason: collision with root package name */
        private final ComponentParam f19813b;

        public NamedComponentParam(String name, ComponentParam value) {
            Intrinsics.checkNotNullParameter(name, "name");
            Intrinsics.checkNotNullParameter(value, "value");
            this.f19812a = name;
            this.f19813b = value;
        }

        public final String a() {
            return this.f19812a;
        }

        public final ComponentParam b() {
            return this.f19813b;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj instanceof NamedComponentParam) {
                NamedComponentParam namedComponentParam = (NamedComponentParam) obj;
                return Intrinsics.areEqual(this.f19812a, namedComponentParam.f19812a) && Intrinsics.areEqual(this.f19813b, namedComponentParam.f19813b);
            }
            return false;
        }

        public int hashCode() {
            return (this.f19812a.hashCode() * 31) + this.f19813b.hashCode();
        }

        public String toString() {
            String str = this.f19812a;
            ComponentParam componentParam = this.f19813b;
            return "NamedComponentParam(name=" + str + ", value=" + componentParam + ")";
        }
    }

    @i(generateAdapter = true)
    @kotlin.Metadata(d1 = {"\u0000\u0014\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\u0010 \n\u0002\u0018\u0002\n\u0002\b\u0007\b\u0007\u0018\u00002\u00020\u0001B\u0017\u0012\u000e\u0010\u0004\u001a\n\u0012\u0004\u0012\u00020\u0003\u0018\u00010\u0002¢\u0006\u0004\b\u0005\u0010\u0006R\u001f\u0010\u0004\u001a\n\u0012\u0004\u0012\u00020\u0003\u0018\u00010\u00028\u0006¢\u0006\f\n\u0004\b\u0007\u0010\b\u001a\u0004\b\u0007\u0010\t¨\u0006\n"}, d2 = {"Lcom/withpersona/sdk2/inquiry/ui/network/OneTimeLinkCodeForPersonasRequest$TransitionParams;", "", "", "Lcom/withpersona/sdk2/inquiry/ui/network/OneTimeLinkCodeForPersonasRequest$NamedComponentParam;", "componentData", "<init>", "(Ljava/util/List;)V", "a", "Ljava/util/List;", "()Ljava/util/List;", "ui_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class TransitionParams {

        /* renamed from: a  reason: collision with root package name */
        private final List f19814a;

        public TransitionParams(List list) {
            this.f19814a = list;
        }

        public final List a() {
            return this.f19814a;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final OneTimeLinkCodeForPersonasRequest a(Map componentParams) {
            Intrinsics.checkNotNullParameter(componentParams, "componentParams");
            ArrayList arrayList = new ArrayList(componentParams.size());
            for (Map.Entry entry : componentParams.entrySet()) {
                arrayList.add(new NamedComponentParam((String) entry.getKey(), (ComponentParam) entry.getValue()));
            }
            return new OneTimeLinkCodeForPersonasRequest(new Meta(new TransitionParams(arrayList)));
        }

        private a() {
        }
    }

    public OneTimeLinkCodeForPersonasRequest(Meta meta) {
        Intrinsics.checkNotNullParameter(meta, "meta");
        this.f19810a = meta;
    }

    public final Meta a() {
        return this.f19810a;
    }
}
