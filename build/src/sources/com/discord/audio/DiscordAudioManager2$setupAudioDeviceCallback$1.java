package com.discord.audio;

import android.media.AudioDeviceCallback;
import android.media.AudioDeviceInfo;
import android.media.AudioManager;
import android.os.RemoteException;
import java.util.ArrayList;
import java.util.Set;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.collections.CollectionsKt;
import kotlin.collections.x0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
@Metadata(d1 = {"\u0000\u001d\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0002\n\u0000\n\u0002\u0010\u0011\n\u0002\u0018\u0002\n\u0002\b\u0004*\u0001\u0000\b\n\u0018\u00002\u00020\u0001J\u001f\u0010\u0002\u001a\u00020\u00032\u0010\u0010\u0004\u001a\f\u0012\u0006\b\u0001\u0012\u00020\u0006\u0018\u00010\u0005H\u0016¢\u0006\u0002\u0010\u0007J\u001f\u0010\b\u001a\u00020\u00032\u0010\u0010\t\u001a\f\u0012\u0006\b\u0001\u0012\u00020\u0006\u0018\u00010\u0005H\u0016¢\u0006\u0002\u0010\u0007¨\u0006\n"}, d2 = {"com/discord/audio/DiscordAudioManager2$setupAudioDeviceCallback$1", "Landroid/media/AudioDeviceCallback;", "onAudioDevicesAdded", "", "addedDevices", "", "Landroid/media/AudioDeviceInfo;", "([Landroid/media/AudioDeviceInfo;)V", "onAudioDevicesRemoved", "removedDevices", "audio_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nDiscordAudioManager2.kt\nKotlin\n*S Kotlin\n*F\n+ 1 DiscordAudioManager2.kt\ncom/discord/audio/DiscordAudioManager2$setupAudioDeviceCallback$1\n+ 2 _Arrays.kt\nkotlin/collections/ArraysKt___ArraysKt\n*L\n1#1,224:1\n3829#2:225\n4344#2,2:226\n3829#2:228\n4344#2,2:229\n*S KotlinDebug\n*F\n+ 1 DiscordAudioManager2.kt\ncom/discord/audio/DiscordAudioManager2$setupAudioDeviceCallback$1\n*L\n176#1:225\n176#1:226,2\n216#1:228\n216#1:229,2\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class DiscordAudioManager2$setupAudioDeviceCallback$1 extends AudioDeviceCallback {
    final /* synthetic */ DiscordAudioManager2 this$0;

    /* JADX INFO: Access modifiers changed from: package-private */
    public DiscordAudioManager2$setupAudioDeviceCallback$1(DiscordAudioManager2 discordAudioManager2) {
        this.this$0 = discordAudioManager2;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit onAudioDevicesAdded$lambda$1(DiscordAudioManager2 discordAudioManager2, DiscordAudioManagerListener listener) {
        Intrinsics.checkNotNullParameter(listener, "listener");
        listener.onAudioDevicesUpdated(CollectionsKt.h1(discordAudioManager2.getAudioDevices()));
        return Unit.f31988a;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit onAudioDevicesRemoved$lambda$5(DiscordAudioManager2 discordAudioManager2, DiscordAudioManagerListener listener) {
        Intrinsics.checkNotNullParameter(listener, "listener");
        listener.onAudioDevicesUpdated(CollectionsKt.h1(discordAudioManager2.getAudioDevices()));
        return Unit.f31988a;
    }

    @Override // android.media.AudioDeviceCallback
    public void onAudioDevicesAdded(AudioDeviceInfo[] audioDeviceInfoArr) {
        Set set;
        AudioDeviceInfo audioDeviceInfo;
        AudioDeviceInfo audioDeviceInfo2;
        AudioDeviceInfo audioDeviceInfo3;
        AudioManager audioManager;
        AudioManager audioManager2;
        if (audioDeviceInfoArr != null && audioDeviceInfoArr.length != 0) {
            DiscordAudioManager2 discordAudioManager2 = this.this$0;
            set = discordAudioManager2.audioDevices;
            ArrayList arrayList = new ArrayList();
            for (AudioDeviceInfo audioDeviceInfo4 : audioDeviceInfoArr) {
                if (audioDeviceInfo4.isSink()) {
                    arrayList.add(audioDeviceInfo4);
                }
            }
            discordAudioManager2.audioDevices = x0.l(set, arrayList);
            final DiscordAudioManager2 discordAudioManager22 = this.this$0;
            discordAudioManager22.notifyListeners(new Function1() { // from class: com.discord.audio.f
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit onAudioDevicesAdded$lambda$1;
                    onAudioDevicesAdded$lambda$1 = DiscordAudioManager2$setupAudioDeviceCallback$1.onAudioDevicesAdded$lambda$1(DiscordAudioManager2.this, (DiscordAudioManagerListener) obj);
                    return onAudioDevicesAdded$lambda$1;
                }
            });
            audioDeviceInfo = this.this$0.preferredAudioDevice;
            if (audioDeviceInfo == null) {
                int length = audioDeviceInfoArr.length;
                int i10 = 0;
                while (true) {
                    audioDeviceInfo2 = null;
                    if (i10 < length) {
                        audioDeviceInfo3 = audioDeviceInfoArr[i10];
                        if (AndroidAudioDeviceKt.getAudioDeviceTypeToSimpleMapping().getOrDefault(Integer.valueOf(audioDeviceInfo3.getType()), SimpleDeviceType.INVALID) == SimpleDeviceType.BLUETOOTH_HEADSET) {
                            break;
                        }
                        i10++;
                    } else {
                        audioDeviceInfo3 = null;
                        break;
                    }
                }
                for (AudioDeviceInfo audioDeviceInfo5 : audioDeviceInfoArr) {
                    if (AndroidAudioDeviceKt.getAudioDeviceTypeToSimpleMapping().getOrDefault(Integer.valueOf(audioDeviceInfo5.getType()), SimpleDeviceType.INVALID) == SimpleDeviceType.WIRED_HEADSET) {
                        audioDeviceInfo2 = audioDeviceInfo5;
                        break;
                    }
                }
                try {
                    if (audioDeviceInfo3 != null) {
                        audioManager2 = this.this$0.androidAudioManager;
                        audioManager2.setCommunicationDevice(audioDeviceInfo3);
                    } else if (audioDeviceInfo2 != null) {
                        audioManager = this.this$0.androidAudioManager;
                        audioManager.setCommunicationDevice(audioDeviceInfo2);
                    }
                } catch (RemoteException | IllegalArgumentException unused) {
                }
            }
            this.this$0.emitEffectiveDevice();
        }
    }

    @Override // android.media.AudioDeviceCallback
    public void onAudioDevicesRemoved(AudioDeviceInfo[] audioDeviceInfoArr) {
        Set set;
        if (audioDeviceInfoArr != null && audioDeviceInfoArr.length != 0) {
            DiscordAudioManager2 discordAudioManager2 = this.this$0;
            set = discordAudioManager2.audioDevices;
            ArrayList arrayList = new ArrayList();
            for (AudioDeviceInfo audioDeviceInfo : audioDeviceInfoArr) {
                if (audioDeviceInfo.isSink()) {
                    arrayList.add(audioDeviceInfo);
                }
            }
            discordAudioManager2.audioDevices = x0.j(set, CollectionsKt.l1(arrayList));
            final DiscordAudioManager2 discordAudioManager22 = this.this$0;
            discordAudioManager22.notifyListeners(new Function1() { // from class: com.discord.audio.g
                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Object obj) {
                    Unit onAudioDevicesRemoved$lambda$5;
                    onAudioDevicesRemoved$lambda$5 = DiscordAudioManager2$setupAudioDeviceCallback$1.onAudioDevicesRemoved$lambda$5(DiscordAudioManager2.this, (DiscordAudioManagerListener) obj);
                    return onAudioDevicesRemoved$lambda$5;
                }
            });
            this.this$0.emitEffectiveDevice();
        }
    }
}
