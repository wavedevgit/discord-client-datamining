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
    private final String f53251d;

    /* renamed from: e  reason: collision with root package name */
    private final Bundle f53252e;

    /* renamed from: i  reason: collision with root package name */
    private final Bundle f53253i;

    /* renamed from: o  reason: collision with root package name */
    private final String f53254o;

    /* renamed from: p  reason: collision with root package name */
    private final String f53255p;

    /* renamed from: q  reason: collision with root package name */
    private final String f53256q;

    /* renamed from: r  reason: collision with root package name */
    public static final a f53250r = new a(null);
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
        this.f53251d = type;
        this.f53252e = credentialRetrievalData;
        this.f53253i = candidateQueryData;
        this.f53254o = requestMatcher;
        this.f53255p = requestType;
        this.f53256q = protocolType;
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
        return this.f53253i;
    }

    public final Bundle c() {
        return this.f53252e;
    }

    public final String d() {
        return this.f53256q;
    }

    public final String e() {
        return this.f53254o;
    }

    public final String f() {
        return this.f53255p;
    }

    public final String g() {
        return this.f53251d;
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel dest, int i10) {
        Intrinsics.checkNotNullParameter(dest, "dest");
        d.c(this, dest, i10);
    }
}
