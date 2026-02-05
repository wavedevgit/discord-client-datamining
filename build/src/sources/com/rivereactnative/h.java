package com.rivereactnative;

import app.rive.runtime.kotlin.core.errors.AnimationException;
import app.rive.runtime.kotlin.core.errors.ArtboardException;
import app.rive.runtime.kotlin.core.errors.MalformedFileException;
import app.rive.runtime.kotlin.core.errors.RiveException;
import app.rive.runtime.kotlin.core.errors.StateMachineException;
import app.rive.runtime.kotlin.core.errors.StateMachineInputException;
import app.rive.runtime.kotlin.core.errors.TextValueRunException;
import app.rive.runtime.kotlin.core.errors.UnsupportedRuntimeVersionException;
import app.rive.runtime.kotlin.core.errors.ViewModelException;
import kotlin.enums.EnumEntries;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class h {
    private static final /* synthetic */ EnumEntries A;

    /* renamed from: i  reason: collision with root package name */
    public static final a f17673i;

    /* renamed from: o  reason: collision with root package name */
    public static final h f17674o = new h("FileNotFound", 0, "FileNotFound");

    /* renamed from: p  reason: collision with root package name */
    public static final h f17675p = new h("UnsupportedRuntimeVersion", 1, "UnsupportedRuntimeVersion");

    /* renamed from: q  reason: collision with root package name */
    public static final h f17676q = new h("IncorrectRiveFileUrl", 2, "IncorrectRiveFileUrl");

    /* renamed from: r  reason: collision with root package name */
    public static final h f17677r = new h("IncorrectAnimationName", 3, "IncorrectAnimationName");

    /* renamed from: s  reason: collision with root package name */
    public static final h f17678s = new h("MalformedFile", 4, "MalformedFile");

    /* renamed from: t  reason: collision with root package name */
    public static final h f17679t = new h("IncorrectArtboardName", 5, "IncorrectArtboardName");

    /* renamed from: u  reason: collision with root package name */
    public static final h f17680u = new h("IncorrectStateMachineName", 6, "IncorrectStateMachineName");

    /* renamed from: v  reason: collision with root package name */
    public static final h f17681v = new h("IncorrectStateMachineInput", 7, "IncorrectStateMachineInput");

    /* renamed from: w  reason: collision with root package name */
    public static final h f17682w = new h("TextRunNotFoundError", 8, "TextRunNotFoundError");

    /* renamed from: x  reason: collision with root package name */
    public static final h f17683x = new h("DataBindingError", 9, "DataBindingError");

    /* renamed from: y  reason: collision with root package name */
    public static final h f17684y = new h("UnusedReferencedAssetError", 10, "UnusedReferencedAssetError");

    /* renamed from: z  reason: collision with root package name */
    private static final /* synthetic */ h[] f17685z;

    /* renamed from: d  reason: collision with root package name */
    private final String f17686d;

    /* renamed from: e  reason: collision with root package name */
    private String f17687e = "Default message";

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final h a(RiveException ex) {
            Intrinsics.checkNotNullParameter(ex, "ex");
            if (ex instanceof ArtboardException) {
                h hVar = h.f17679t;
                String message = ex.getMessage();
                Intrinsics.checkNotNull(message);
                hVar.e(message);
                return hVar;
            } else if (ex instanceof UnsupportedRuntimeVersionException) {
                h hVar2 = h.f17675p;
                String message2 = ex.getMessage();
                Intrinsics.checkNotNull(message2);
                hVar2.e(message2);
                return hVar2;
            } else if (ex instanceof MalformedFileException) {
                h hVar3 = h.f17678s;
                String message3 = ex.getMessage();
                Intrinsics.checkNotNull(message3);
                hVar3.e(message3);
                return hVar3;
            } else if (ex instanceof AnimationException) {
                h hVar4 = h.f17677r;
                String message4 = ex.getMessage();
                Intrinsics.checkNotNull(message4);
                hVar4.e(message4);
                return hVar4;
            } else if (ex instanceof StateMachineException) {
                h hVar5 = h.f17680u;
                String message5 = ex.getMessage();
                Intrinsics.checkNotNull(message5);
                hVar5.e(message5);
                return hVar5;
            } else if (ex instanceof StateMachineInputException) {
                h hVar6 = h.f17681v;
                String message6 = ex.getMessage();
                Intrinsics.checkNotNull(message6);
                hVar6.e(message6);
                return hVar6;
            } else if (ex instanceof TextValueRunException) {
                h hVar7 = h.f17682w;
                String message7 = ex.getMessage();
                Intrinsics.checkNotNull(message7);
                hVar7.e(message7);
                return hVar7;
            } else if (ex instanceof ViewModelException) {
                h hVar8 = h.f17683x;
                String message8 = ex.getMessage();
                Intrinsics.checkNotNull(message8);
                hVar8.e(message8);
                return hVar8;
            } else {
                return null;
            }
        }

        private a() {
        }
    }

    static {
        h[] a10 = a();
        f17685z = a10;
        A = vr.a.a(a10);
        f17673i = new a(null);
    }

    private h(String str, int i10, String str2) {
        this.f17686d = str2;
    }

    private static final /* synthetic */ h[] a() {
        return new h[]{f17674o, f17675p, f17676q, f17677r, f17678s, f17679t, f17680u, f17681v, f17682w, f17683x, f17684y};
    }

    public static h valueOf(String str) {
        return (h) Enum.valueOf(h.class, str);
    }

    public static h[] values() {
        return (h[]) f17685z.clone();
    }

    public final String d() {
        return this.f17687e;
    }

    public final void e(String str) {
        Intrinsics.checkNotNullParameter(str, "<set-?>");
        this.f17687e = str;
    }

    @Override // java.lang.Enum
    public String toString() {
        return this.f17686d;
    }
}
