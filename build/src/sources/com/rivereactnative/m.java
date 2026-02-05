package com.rivereactnative;

import app.rive.runtime.kotlin.core.FileAsset;
import app.rive.runtime.kotlin.core.FileAssetLoader;
import com.facebook.react.bridge.ReadableMap;
import java.util.LinkedHashMap;
import java.util.Map;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.Intrinsics;
import kotlin.text.StringsKt;
import kotlinx.coroutines.CompletableJob;
import kotlinx.coroutines.CoroutineScope;
import kotlinx.coroutines.Job;
import ms.j1;
import ms.m0;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class m extends FileAssetLoader {

    /* renamed from: d  reason: collision with root package name */
    private final ReadableMap f17697d;

    /* renamed from: e  reason: collision with root package name */
    private final Function2 f17698e;

    /* renamed from: i  reason: collision with root package name */
    private final CompletableJob f17699i;

    /* renamed from: o  reason: collision with root package name */
    private final CoroutineScope f17700o;

    /* renamed from: p  reason: collision with root package name */
    private Map f17701p;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class a extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f17702d;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ ReadableMap f17704i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ FileAsset f17705o;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        a(ReadableMap readableMap, FileAsset fileAsset, Continuation continuation) {
            super(2, continuation);
            this.f17704i = readableMap;
            this.f17705o = fileAsset;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new a(this.f17704i, this.f17705o, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            ur.b.f();
            if (this.f17702d == 0) {
                kotlin.c.b(obj);
                try {
                    m.this.f17698e.invoke(this.f17704i, this.f17705o);
                } catch (Exception unused) {
                }
                return Unit.f31988a;
            }
            throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((a) create(coroutineScope, continuation)).invokeSuspend(Unit.f31988a);
        }
    }

    public m(ReadableMap referencedAssets, Function2 loadAssetHandler) {
        Intrinsics.checkNotNullParameter(referencedAssets, "referencedAssets");
        Intrinsics.checkNotNullParameter(loadAssetHandler, "loadAssetHandler");
        this.f17697d = referencedAssets;
        this.f17698e = loadAssetHandler;
        CompletableJob b10 = j1.b(null, 1, null);
        this.f17699i = b10;
        this.f17700o = kotlinx.coroutines.i.a(m0.b().V0(b10));
        this.f17701p = new LinkedHashMap();
    }

    public final Map b() {
        return this.f17701p;
    }

    public final void dispose() {
        Job.a.a(this.f17699i, null, 1, null);
        kotlinx.coroutines.i.f(this.f17700o, null, 1, null);
        this.f17701p.clear();
    }

    @Override // app.rive.runtime.kotlin.core.FileAssetLoader
    public boolean loadContents(FileAsset asset, byte[] inBandBytes) {
        ReadableMap map;
        Intrinsics.checkNotNullParameter(asset, "asset");
        Intrinsics.checkNotNullParameter(inBandBytes, "inBandBytes");
        String i12 = StringsKt.i1(asset.getUniqueFilename(), ".", null, 2, null);
        ReadableMap map2 = this.f17697d.getMap(i12);
        if (map2 == null) {
            i12 = asset.getName();
            map2 = this.f17697d.getMap(asset.getName());
        }
        if (map2 != null && (map = map2.getMap("source")) != null) {
            ms.i.d(this.f17700o, null, null, new a(map, asset, null), 3, null);
            this.f17701p.put(i12, asset);
            return true;
        }
        return false;
    }
}
