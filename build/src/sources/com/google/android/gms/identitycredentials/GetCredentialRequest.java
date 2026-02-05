package com.google.android.gms.identitycredentials;

import android.os.Bundle;
import android.os.Parcel;
import android.os.Parcelable;
import android.os.ResultReceiver;
import com.google.android.gms.common.internal.ReflectedParcelable;
import java.util.List;
import kotlin.Metadata;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000>\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0010 \n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000e\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0000\n\u0002\u0010\u0002\n\u0002\b\u0015\b\u0007\u0018\u0000 %2\u00020\u00012\u00020\u0002:\u0001&B9\b\u0007\u0012\u000e\b\u0001\u0010\u0005\u001a\b\u0012\u0004\u0012\u00020\u00040\u0003\u0012\b\b\u0001\u0010\u0007\u001a\u00020\u0006\u0012\n\b\u0003\u0010\t\u001a\u0004\u0018\u00010\b\u0012\b\b\u0001\u0010\u000b\u001a\u00020\n¢\u0006\u0004\b\f\u0010\rJ\u001f\u0010\u0013\u001a\u00020\u00122\u0006\u0010\u000f\u001a\u00020\u000e2\u0006\u0010\u0011\u001a\u00020\u0010H\u0016¢\u0006\u0004\b\u0013\u0010\u0014R \u0010\u0005\u001a\b\u0012\u0004\u0012\u00020\u00040\u00038\u0006X\u0087\u0004¢\u0006\f\n\u0004\b\u0015\u0010\u0016\u001a\u0004\b\u0017\u0010\u0018R\u001a\u0010\u0007\u001a\u00020\u00068\u0006X\u0087\u0004¢\u0006\f\n\u0004\b\u0019\u0010\u001a\u001a\u0004\b\u001b\u0010\u001cR\u001c\u0010\t\u001a\u0004\u0018\u00010\b8\u0006X\u0087\u0004¢\u0006\f\n\u0004\b\u001d\u0010\u001e\u001a\u0004\b\u0015\u0010\u001fR \u0010\u000b\u001a\u00020\n8\u0006X\u0087\u0004¢\u0006\u0012\n\u0004\b \u0010!\u0012\u0004\b#\u0010$\u001a\u0004\b\u0019\u0010\"¨\u0006'"}, d2 = {"Lcom/google/android/gms/identitycredentials/GetCredentialRequest;", "Lhf/a;", "Lcom/google/android/gms/common/internal/ReflectedParcelable;", "", "Lxf/c;", "credentialOptions", "Landroid/os/Bundle;", "data", "", "origin", "Landroid/os/ResultReceiver;", "resultReceiver", "<init>", "(Ljava/util/List;Landroid/os/Bundle;Ljava/lang/String;Landroid/os/ResultReceiver;)V", "Landroid/os/Parcel;", "dest", "", "flags", "", "writeToParcel", "(Landroid/os/Parcel;I)V", "d", "Ljava/util/List;", "b", "()Ljava/util/List;", "e", "Landroid/os/Bundle;", "c", "()Landroid/os/Bundle;", "i", "Ljava/lang/String;", "()Ljava/lang/String;", "o", "Landroid/os/ResultReceiver;", "()Landroid/os/ResultReceiver;", "getResultReceiver$annotations", "()V", "p", "a", "java.com.google.android.gmscore.integ.client.identity_credentials_identity_credentials"}, k = 1, mv = {2, 0, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class GetCredentialRequest extends hf.a implements ReflectedParcelable {

    /* renamed from: d  reason: collision with root package name */
    private final List f13954d;

    /* renamed from: e  reason: collision with root package name */
    private final Bundle f13955e;

    /* renamed from: i  reason: collision with root package name */
    private final String f13956i;

    /* renamed from: o  reason: collision with root package name */
    private final ResultReceiver f13957o;

    /* renamed from: p  reason: collision with root package name */
    public static final a f13953p = new a(null);
    @NotNull
    public static final Parcelable.Creator<GetCredentialRequest> CREATOR = new com.google.android.gms.identitycredentials.a();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {
        private a() {
        }

        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }
    }

    public GetCredentialRequest(List credentialOptions, Bundle data, String str, ResultReceiver resultReceiver) {
        Intrinsics.checkNotNullParameter(credentialOptions, "credentialOptions");
        Intrinsics.checkNotNullParameter(data, "data");
        Intrinsics.checkNotNullParameter(resultReceiver, "resultReceiver");
        this.f13954d = credentialOptions;
        this.f13955e = data;
        this.f13956i = str;
        this.f13957o = resultReceiver;
    }

    public final List b() {
        return this.f13954d;
    }

    public final Bundle c() {
        return this.f13955e;
    }

    public final String d() {
        return this.f13956i;
    }

    public final ResultReceiver e() {
        return this.f13957o;
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel dest, int i10) {
        Intrinsics.checkNotNullParameter(dest, "dest");
        com.google.android.gms.identitycredentials.a.c(this, dest, i10);
    }
}
