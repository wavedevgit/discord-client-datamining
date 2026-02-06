package com.withpersona.sdk2.inquiry.ui.network;

import com.squareup.moshi.i;
import fq.k5;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
@i(generateAdapter = true)
@kotlin.Metadata(d1 = {"\u0000\u0010\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\u0018\u0002\n\u0002\b\t\b\u0007\u0018\u0000 \t2\u00020\u0001:\u0002\n\u0006B\u000f\u0012\u0006\u0010\u0003\u001a\u00020\u0002¢\u0006\u0004\b\u0004\u0010\u0005R\u0017\u0010\u0003\u001a\u00020\u00028\u0006¢\u0006\f\n\u0004\b\u0006\u0010\u0007\u001a\u0004\b\u0006\u0010\b¨\u0006\u000b"}, d2 = {"Lcom/withpersona/sdk2/inquiry/ui/network/AddressAutocompleteRequest;", "", "Lcom/withpersona/sdk2/inquiry/ui/network/AddressAutocompleteRequest$Meta;", "meta", "<init>", "(Lcom/withpersona/sdk2/inquiry/ui/network/AddressAutocompleteRequest$Meta;)V", "a", "Lcom/withpersona/sdk2/inquiry/ui/network/AddressAutocompleteRequest$Meta;", "()Lcom/withpersona/sdk2/inquiry/ui/network/AddressAutocompleteRequest$Meta;", "b", "Meta", "ui_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class AddressAutocompleteRequest {

    /* renamed from: b  reason: collision with root package name */
    public static final a f19764b = new a(null);

    /* renamed from: a  reason: collision with root package name */
    private final Meta f19765a;

    @i(generateAdapter = true)
    @kotlin.Metadata(d1 = {"\u0000\u0010\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\u0010\u000e\n\u0002\b\t\b\u0007\u0018\u00002\u00020\u0001B\u0017\u0012\u0006\u0010\u0003\u001a\u00020\u0002\u0012\u0006\u0010\u0004\u001a\u00020\u0002¢\u0006\u0004\b\u0005\u0010\u0006R\u0017\u0010\u0003\u001a\u00020\u00028\u0006¢\u0006\f\n\u0004\b\u0007\u0010\b\u001a\u0004\b\u0007\u0010\tR\u0017\u0010\u0004\u001a\u00020\u00028\u0006¢\u0006\f\n\u0004\b\n\u0010\b\u001a\u0004\b\n\u0010\t¨\u0006\u000b"}, d2 = {"Lcom/withpersona/sdk2/inquiry/ui/network/AddressAutocompleteRequest$Meta;", "", "", "fromComponent", "searchInput", "<init>", "(Ljava/lang/String;Ljava/lang/String;)V", "a", "Ljava/lang/String;", "()Ljava/lang/String;", "b", "ui_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class Meta {

        /* renamed from: a  reason: collision with root package name */
        private final String f19766a;

        /* renamed from: b  reason: collision with root package name */
        private final String f19767b;

        public Meta(String fromComponent, String searchInput) {
            Intrinsics.checkNotNullParameter(fromComponent, "fromComponent");
            Intrinsics.checkNotNullParameter(searchInput, "searchInput");
            this.f19766a = fromComponent;
            this.f19767b = searchInput;
        }

        public final String a() {
            return this.f19766a;
        }

        public final String b() {
            return this.f19767b;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final AddressAutocompleteRequest a(k5 fromComponent, String searchInput) {
            Intrinsics.checkNotNullParameter(fromComponent, "fromComponent");
            Intrinsics.checkNotNullParameter(searchInput, "searchInput");
            return new AddressAutocompleteRequest(new Meta(fromComponent.getName(), searchInput));
        }

        private a() {
        }
    }

    public AddressAutocompleteRequest(Meta meta) {
        Intrinsics.checkNotNullParameter(meta, "meta");
        this.f19765a = meta;
    }

    public final Meta a() {
        return this.f19765a;
    }
}
