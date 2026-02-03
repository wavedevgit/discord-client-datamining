package com.withpersona.sdk2.inquiry.network.dto;

import com.squareup.moshi.h;
import com.squareup.moshi.m;
import com.squareup.moshi.t;
import com.squareup.moshi.w;
import com.withpersona.sdk2.inquiry.network.dto.NextStep;
import com.withpersona.sdk2.inquiry.network.dto.ui.components.RemoteImage;
import java.lang.reflect.Constructor;
import kotlin.Metadata;
import kotlin.collections.x0;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000L\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\u0018\u00002\b\u0012\u0004\u0012\u00020\u00020\u0001B\u000f\u0012\u0006\u0010\u0004\u001a\u00020\u0003¢\u0006\u0004\b\u0005\u0010\u0006J\u000f\u0010\b\u001a\u00020\u0007H\u0016¢\u0006\u0004\b\b\u0010\tJ\u0017\u0010\f\u001a\u00020\u00022\u0006\u0010\u000b\u001a\u00020\nH\u0016¢\u0006\u0004\b\f\u0010\rJ!\u0010\u0012\u001a\u00020\u00112\u0006\u0010\u000f\u001a\u00020\u000e2\b\u0010\u0010\u001a\u0004\u0018\u00010\u0002H\u0016¢\u0006\u0004\b\u0012\u0010\u0013R\u0014\u0010\u0015\u001a\u00020\u00148\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0015\u0010\u0016R\u001c\u0010\u0018\u001a\n\u0012\u0006\u0012\u0004\u0018\u00010\u00170\u00018\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0018\u0010\u0019R\u001e\u0010\u001b\u001a\n\u0012\u0004\u0012\u00020\u0002\u0018\u00010\u001a8\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\b\u001b\u0010\u001c¨\u0006\u001d"}, d2 = {"Lcom/withpersona/sdk2/inquiry/network/dto/NextStep_GovernmentId_AssetConfig_CapturePageJsonAdapter;", "Lcom/squareup/moshi/h;", "Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$GovernmentId$AssetConfig$CapturePage;", "Lcom/squareup/moshi/w;", "moshi", "<init>", "(Lcom/squareup/moshi/w;)V", "", "toString", "()Ljava/lang/String;", "Lcom/squareup/moshi/m;", "reader", "fromJson", "(Lcom/squareup/moshi/m;)Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$GovernmentId$AssetConfig$CapturePage;", "Lcom/squareup/moshi/t;", "writer", "value_", "", "toJson", "(Lcom/squareup/moshi/t;Lcom/withpersona/sdk2/inquiry/network/dto/NextStep$GovernmentId$AssetConfig$CapturePage;)V", "Lcom/squareup/moshi/m$b;", "options", "Lcom/squareup/moshi/m$b;", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/RemoteImage;", "nullableRemoteImageAdapter", "Lcom/squareup/moshi/h;", "Ljava/lang/reflect/Constructor;", "constructorRef", "Ljava/lang/reflect/Constructor;", "network-inquiry_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nNextStep_GovernmentId_AssetConfig_CapturePageJsonAdapter.kt\nKotlin\n*S Kotlin\n*F\n+ 1 NextStep_GovernmentId_AssetConfig_CapturePageJsonAdapter.kt\ncom/withpersona/sdk2/inquiry/network/dto/NextStep_GovernmentId_AssetConfig_CapturePageJsonAdapter\n+ 2 fake.kt\nkotlin/jvm/internal/FakeKt\n*L\n1#1,165:1\n1#2:166\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class NextStep_GovernmentId_AssetConfig_CapturePageJsonAdapter extends h {
    private volatile Constructor<NextStep.GovernmentId.AssetConfig.CapturePage> constructorRef;
    @NotNull
    private final h nullableRemoteImageAdapter;
    @NotNull
    private final m.b options;

    public NextStep_GovernmentId_AssetConfig_CapturePageJsonAdapter(@NotNull w moshi) {
        Intrinsics.checkNotNullParameter(moshi, "moshi");
        m.b a10 = m.b.a("idFrontPictograph", "idBackPictograph", "barcodePdf417Pictograph", "passportFrontPictograph", "passportSignaturePictograph", "idFrontHelpModalPictograph", "idBackHelpModalPictograph", "barcodeHelpModalPictograph");
        Intrinsics.checkNotNullExpressionValue(a10, "of(...)");
        this.options = a10;
        h f10 = moshi.f(RemoteImage.class, x0.d(), "idFrontPictograph");
        Intrinsics.checkNotNullExpressionValue(f10, "adapter(...)");
        this.nullableRemoteImageAdapter = f10;
    }

    @NotNull
    public String toString() {
        StringBuilder sb2 = new StringBuilder(67);
        sb2.append("GeneratedJsonAdapter(");
        sb2.append("NextStep.GovernmentId.AssetConfig.CapturePage");
        sb2.append(')');
        return sb2.toString();
    }

    @Override // com.squareup.moshi.h
    @NotNull
    public NextStep.GovernmentId.AssetConfig.CapturePage fromJson(@NotNull m reader) {
        Intrinsics.checkNotNullParameter(reader, "reader");
        reader.r();
        int i10 = -1;
        RemoteImage remoteImage = null;
        RemoteImage remoteImage2 = null;
        RemoteImage remoteImage3 = null;
        RemoteImage remoteImage4 = null;
        RemoteImage remoteImage5 = null;
        RemoteImage remoteImage6 = null;
        RemoteImage remoteImage7 = null;
        RemoteImage remoteImage8 = null;
        while (reader.hasNext()) {
            switch (reader.t0(this.options)) {
                case -1:
                    reader.F0();
                    reader.P();
                    break;
                case 0:
                    remoteImage = (RemoteImage) this.nullableRemoteImageAdapter.fromJson(reader);
                    i10 &= -2;
                    break;
                case 1:
                    remoteImage2 = (RemoteImage) this.nullableRemoteImageAdapter.fromJson(reader);
                    i10 &= -3;
                    break;
                case 2:
                    remoteImage3 = (RemoteImage) this.nullableRemoteImageAdapter.fromJson(reader);
                    i10 &= -5;
                    break;
                case 3:
                    remoteImage4 = (RemoteImage) this.nullableRemoteImageAdapter.fromJson(reader);
                    i10 &= -9;
                    break;
                case 4:
                    remoteImage5 = (RemoteImage) this.nullableRemoteImageAdapter.fromJson(reader);
                    i10 &= -17;
                    break;
                case 5:
                    remoteImage6 = (RemoteImage) this.nullableRemoteImageAdapter.fromJson(reader);
                    i10 &= -33;
                    break;
                case 6:
                    remoteImage7 = (RemoteImage) this.nullableRemoteImageAdapter.fromJson(reader);
                    i10 &= -65;
                    break;
                case 7:
                    remoteImage8 = (RemoteImage) this.nullableRemoteImageAdapter.fromJson(reader);
                    i10 &= -129;
                    break;
            }
        }
        reader.y();
        if (i10 == -256) {
            RemoteImage remoteImage9 = remoteImage8;
            RemoteImage remoteImage10 = remoteImage7;
            RemoteImage remoteImage11 = remoteImage6;
            RemoteImage remoteImage12 = remoteImage5;
            RemoteImage remoteImage13 = remoteImage4;
            return new NextStep.GovernmentId.AssetConfig.CapturePage(remoteImage, remoteImage2, remoteImage3, remoteImage13, remoteImage12, remoteImage11, remoteImage10, remoteImage9);
        }
        RemoteImage remoteImage14 = remoteImage8;
        RemoteImage remoteImage15 = remoteImage7;
        RemoteImage remoteImage16 = remoteImage6;
        RemoteImage remoteImage17 = remoteImage5;
        RemoteImage remoteImage18 = remoteImage4;
        RemoteImage remoteImage19 = remoteImage3;
        RemoteImage remoteImage20 = remoteImage2;
        RemoteImage remoteImage21 = remoteImage;
        Constructor<NextStep.GovernmentId.AssetConfig.CapturePage> constructor = this.constructorRef;
        if (constructor == null) {
            constructor = NextStep.GovernmentId.AssetConfig.CapturePage.class.getDeclaredConstructor(RemoteImage.class, RemoteImage.class, RemoteImage.class, RemoteImage.class, RemoteImage.class, RemoteImage.class, RemoteImage.class, RemoteImage.class, Integer.TYPE, tm.c.f49935c);
            this.constructorRef = constructor;
            Intrinsics.checkNotNullExpressionValue(constructor, "also(...)");
        }
        NextStep.GovernmentId.AssetConfig.CapturePage newInstance = constructor.newInstance(remoteImage21, remoteImage20, remoteImage19, remoteImage18, remoteImage17, remoteImage16, remoteImage15, remoteImage14, Integer.valueOf(i10), null);
        Intrinsics.checkNotNullExpressionValue(newInstance, "newInstance(...)");
        return newInstance;
    }

    @Override // com.squareup.moshi.h
    public void toJson(@NotNull t writer, NextStep.GovernmentId.AssetConfig.CapturePage capturePage) {
        Intrinsics.checkNotNullParameter(writer, "writer");
        if (capturePage != null) {
            writer.l();
            writer.t0("idFrontPictograph");
            this.nullableRemoteImageAdapter.toJson(writer, capturePage.getIdFrontPictograph());
            writer.t0("idBackPictograph");
            this.nullableRemoteImageAdapter.toJson(writer, capturePage.getIdBackPictograph());
            writer.t0("barcodePdf417Pictograph");
            this.nullableRemoteImageAdapter.toJson(writer, capturePage.getBarcodePdf417Pictograph());
            writer.t0("passportFrontPictograph");
            this.nullableRemoteImageAdapter.toJson(writer, capturePage.getPassportFrontPictograph());
            writer.t0("passportSignaturePictograph");
            this.nullableRemoteImageAdapter.toJson(writer, capturePage.getPassportSignaturePictograph());
            writer.t0("idFrontHelpModalPictograph");
            this.nullableRemoteImageAdapter.toJson(writer, capturePage.getIdFrontHelpModalPictograph());
            writer.t0("idBackHelpModalPictograph");
            this.nullableRemoteImageAdapter.toJson(writer, capturePage.getIdBackHelpModalPictograph());
            writer.t0("barcodeHelpModalPictograph");
            this.nullableRemoteImageAdapter.toJson(writer, capturePage.getBarcodeHelpModalPictograph());
            writer.E();
            return;
        }
        throw new NullPointerException("value_ was null! Wrap in .nullSafe() to write nullable values.");
    }
}
