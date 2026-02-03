package com.withpersona.sdk2.inquiry.ui.network;

import com.facebook.react.devsupport.StackTraceHelper;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import com.squareup.moshi.i;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
@i(generateAdapter = true)
@kotlin.Metadata(d1 = {"\u0000\u0010\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\u0010\u000e\n\u0002\b\u0015\b\u0007\u0018\u00002\u00020\u0001Bc\u0012\u0006\u0010\u0003\u001a\u00020\u0002\u0012\n\b\u0002\u0010\u0004\u001a\u0004\u0018\u00010\u0002\u0012\n\b\u0002\u0010\u0005\u001a\u0004\u0018\u00010\u0002\u0012\n\b\u0002\u0010\u0006\u001a\u0004\u0018\u00010\u0002\u0012\n\b\u0002\u0010\u0007\u001a\u0004\u0018\u00010\u0002\u0012\n\b\u0002\u0010\b\u001a\u0004\u0018\u00010\u0002\u0012\n\b\u0002\u0010\t\u001a\u0004\u0018\u00010\u0002\u0012\n\b\u0002\u0010\n\u001a\u0004\u0018\u00010\u0002¢\u0006\u0004\b\u000b\u0010\fR\u0017\u0010\u0003\u001a\u00020\u00028\u0006¢\u0006\f\n\u0004\b\r\u0010\u000e\u001a\u0004\b\u000f\u0010\u0010R\u001c\u0010\u0004\u001a\u0004\u0018\u00010\u00028\u0006X\u0087\u0004¢\u0006\f\n\u0004\b\u0011\u0010\u000e\u001a\u0004\b\u0012\u0010\u0010R\u001c\u0010\u0005\u001a\u0004\u0018\u00010\u00028\u0006X\u0087\u0004¢\u0006\f\n\u0004\b\u0013\u0010\u000e\u001a\u0004\b\u0014\u0010\u0010R\u001c\u0010\u0006\u001a\u0004\u0018\u00010\u00028\u0006X\u0087\u0004¢\u0006\f\n\u0004\b\u0015\u0010\u000e\u001a\u0004\b\u0011\u0010\u0010R\u001c\u0010\u0007\u001a\u0004\u0018\u00010\u00028\u0006X\u0087\u0004¢\u0006\f\n\u0004\b\u0012\u0010\u000e\u001a\u0004\b\u0016\u0010\u0010R\u001c\u0010\b\u001a\u0004\u0018\u00010\u00028\u0006X\u0087\u0004¢\u0006\f\n\u0004\b\u0014\u0010\u000e\u001a\u0004\b\u0015\u0010\u0010R\u001c\u0010\t\u001a\u0004\u0018\u00010\u00028\u0006X\u0087\u0004¢\u0006\f\n\u0004\b\u0016\u0010\u000e\u001a\u0004\b\u0013\u0010\u0010R\u001c\u0010\n\u001a\u0004\u0018\u00010\u00028\u0006X\u0087\u0004¢\u0006\f\n\u0004\b\u000f\u0010\u000e\u001a\u0004\b\r\u0010\u0010¨\u0006\u0017"}, d2 = {"Lcom/withpersona/sdk2/inquiry/ui/network/LocationData;", "", "", StackTraceHelper.ID_KEY, "addressStreet1", "addressStreet2", "addressCity", "addressSubdivision", "addressPostalCode", "addressCountryCode", "addressBusinessName", "<init>", "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)V", "a", "Ljava/lang/String;", "h", "()Ljava/lang/String;", "b", "e", "c", "f", "d", "g", "ui_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class LocationData {

    /* renamed from: a  reason: collision with root package name */
    private final String f19408a;

    /* renamed from: b  reason: collision with root package name */
    private final String f19409b;

    /* renamed from: c  reason: collision with root package name */
    private final String f19410c;

    /* renamed from: d  reason: collision with root package name */
    private final String f19411d;

    /* renamed from: e  reason: collision with root package name */
    private final String f19412e;

    /* renamed from: f  reason: collision with root package name */
    private final String f19413f;

    /* renamed from: g  reason: collision with root package name */
    private final String f19414g;

    /* renamed from: h  reason: collision with root package name */
    private final String f19415h;

    public LocationData(String id2, String str, String str2, String str3, String str4, String str5, String str6, String str7) {
        Intrinsics.checkNotNullParameter(id2, "id");
        this.f19408a = id2;
        this.f19409b = str;
        this.f19410c = str2;
        this.f19411d = str3;
        this.f19412e = str4;
        this.f19413f = str5;
        this.f19414g = str6;
        this.f19415h = str7;
    }

    public final String a() {
        return this.f19415h;
    }

    public final String b() {
        return this.f19411d;
    }

    public final String c() {
        return this.f19414g;
    }

    public final String d() {
        return this.f19413f;
    }

    public final String e() {
        return this.f19409b;
    }

    public final String f() {
        return this.f19410c;
    }

    public final String g() {
        return this.f19412e;
    }

    public final String h() {
        return this.f19408a;
    }

    public /* synthetic */ LocationData(String str, String str2, String str3, String str4, String str5, String str6, String str7, String str8, int i10, DefaultConstructorMarker defaultConstructorMarker) {
        this(str, (i10 & 2) != 0 ? null : str2, (i10 & 4) != 0 ? null : str3, (i10 & 8) != 0 ? null : str4, (i10 & 16) != 0 ? null : str5, (i10 & 32) != 0 ? null : str6, (i10 & 64) != 0 ? null : str7, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0 ? null : str8);
    }
}
