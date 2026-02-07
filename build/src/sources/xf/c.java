package xf;

import android.os.Bundle;
import android.os.Parcel;
import android.os.Parcelable;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.text.StringsKt;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class c extends hf.a {

    /* renamed from: d  reason: collision with root package name */
    private final String f54662d;

    /* renamed from: e  reason: collision with root package name */
    private final Bundle f54663e;

    /* renamed from: i  reason: collision with root package name */
    private final Bundle f54664i;

    /* renamed from: o  reason: collision with root package name */
    private final String f54665o;

    /* renamed from: p  reason: collision with root package name */
    private final String f54666p;

    /* renamed from: q  reason: collision with root package name */
    private final String f54667q;

    /* renamed from: r  reason: collision with root package name */
    public static final a f54661r = new a(null);
    @NotNull
    public static final Parcelable.Creator<c> CREATOR = new d();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {
        private a() {
        }

        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }
    }

    public c(String type, Bundle credentialRetrievalData, Bundle candidateQueryData, String requestMatcher, String requestType, String protocolType) {
        boolean z10;
        Intrinsics.checkNotNullParameter(type, "type");
        Intrinsics.checkNotNullParameter(credentialRetrievalData, "credentialRetrievalData");
        Intrinsics.checkNotNullParameter(candidateQueryData, "candidateQueryData");
        Intrinsics.checkNotNullParameter(requestMatcher, "requestMatcher");
        Intrinsics.checkNotNullParameter(requestType, "requestType");
        Intrinsics.checkNotNullParameter(protocolType, "protocolType");
        this.f54662d = type;
        this.f54663e = credentialRetrievalData;
        this.f54664i = candidateQueryData;
        this.f54665o = requestMatcher;
        this.f54666p = requestType;
        this.f54667q = protocolType;
        boolean z11 = true;
        if (!StringsKt.k0(requestType) && !StringsKt.k0(protocolType)) {
            z10 = true;
        } else {
            z10 = false;
        }
        z11 = (!StringsKt.k0(type) && requestType.length() == 0 && protocolType.length() == 0) ? z11 : false;
        if (!z10 && !z11) {
            throw new IllegalArgumentException("Either type: " + type + ", or requestType: " + requestType + " and protocolType: " + protocolType + " must be specified, but at least one contains an invalid blank value.");
        }
    }

    public final Bundle b() {
        return this.f54664i;
    }

    public final Bundle c() {
        return this.f54663e;
    }

    public final String d() {
        return this.f54667q;
    }

    public final String e() {
        return this.f54665o;
    }

    public final String f() {
        return this.f54666p;
    }

    public final String h() {
        return this.f54662d;
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel dest, int i10) {
        Intrinsics.checkNotNullParameter(dest, "dest");
        d.c(this, dest, i10);
    }
}
