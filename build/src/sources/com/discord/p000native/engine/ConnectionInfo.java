package com.discord.p000native.engine;

import kotlin.Metadata;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000 \n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0000\n\u0002\u0010\u000b\n\u0000\n\u0002\u0010\u000e\n\u0002\b\u0002\n\u0002\u0010\b\n\u0002\b\u001a\b\u0086\b\u0018\u00002\u00020\u0001B9\u0012\u0006\u0010\u0002\u001a\u00020\u0003\u0012\u0006\u0010\u0004\u001a\u00020\u0005\u0012\u0006\u0010\u0006\u001a\u00020\u0005\u0012\u0006\u0010\u0007\u001a\u00020\b\u0012\b\u0010\t\u001a\u0004\u0018\u00010\b\u0012\b\u0010\n\u001a\u0004\u0018\u00010\b¢\u0006\u0002\u0010\u000bJ\t\u0010\u0016\u001a\u00020\u0003HÆ\u0003J\t\u0010\u0017\u001a\u00020\u0005HÆ\u0003J\t\u0010\u0018\u001a\u00020\u0005HÆ\u0003J\t\u0010\u0019\u001a\u00020\bHÆ\u0003J\u0010\u0010\u001a\u001a\u0004\u0018\u00010\bHÆ\u0003¢\u0006\u0002\u0010\rJ\u0010\u0010\u001b\u001a\u0004\u0018\u00010\bHÆ\u0003¢\u0006\u0002\u0010\rJN\u0010\u001c\u001a\u00020\u00002\b\b\u0002\u0010\u0002\u001a\u00020\u00032\b\b\u0002\u0010\u0004\u001a\u00020\u00052\b\b\u0002\u0010\u0006\u001a\u00020\u00052\b\b\u0002\u0010\u0007\u001a\u00020\b2\n\b\u0002\u0010\t\u001a\u0004\u0018\u00010\b2\n\b\u0002\u0010\n\u001a\u0004\u0018\u00010\bHÆ\u0001¢\u0006\u0002\u0010\u001dJ\u0013\u0010\u001e\u001a\u00020\u00032\b\u0010\u001f\u001a\u0004\u0018\u00010\u0001HÖ\u0003J\t\u0010 \u001a\u00020\bHÖ\u0001J\t\u0010!\u001a\u00020\u0005HÖ\u0001R\u0015\u0010\n\u001a\u0004\u0018\u00010\b¢\u0006\n\n\u0002\u0010\u000e\u001a\u0004\b\f\u0010\rR\u0015\u0010\t\u001a\u0004\u0018\u00010\b¢\u0006\n\n\u0002\u0010\u000e\u001a\u0004\b\u000f\u0010\rR\u0011\u0010\u0002\u001a\u00020\u0003¢\u0006\b\n\u0000\u001a\u0004\b\u0002\u0010\u0010R\u0011\u0010\u0006\u001a\u00020\u0005¢\u0006\b\n\u0000\u001a\u0004\b\u0011\u0010\u0012R\u0011\u0010\u0007\u001a\u00020\b¢\u0006\b\n\u0000\u001a\u0004\b\u0013\u0010\u0014R\u0011\u0010\u0004\u001a\u00020\u0005¢\u0006\b\n\u0000\u001a\u0004\b\u0015\u0010\u0012¨\u0006\""}, d2 = {"Lcom/discord/native/engine/ConnectionInfo;", "", "isConnected", "", "protocol", "", "localAddress", "localPort", "", "createConnectionTime", "connectTime", "(ZLjava/lang/String;Ljava/lang/String;ILjava/lang/Integer;Ljava/lang/Integer;)V", "getConnectTime", "()Ljava/lang/Integer;", "Ljava/lang/Integer;", "getCreateConnectionTime", "()Z", "getLocalAddress", "()Ljava/lang/String;", "getLocalPort", "()I", "getProtocol", "component1", "component2", "component3", "component4", "component5", "component6", "copy", "(ZLjava/lang/String;Ljava/lang/String;ILjava/lang/Integer;Ljava/lang/Integer;)Lcom/discord/native/engine/ConnectionInfo;", "equals", "other", "hashCode", "toString", "android_release"}, k = 1, mv = {1, 9, 0}, xi = 48)
/* renamed from: com.discord.native.engine.ConnectionInfo  reason: invalid package */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class ConnectionInfo {
    private final Integer connectTime;
    private final Integer createConnectionTime;
    private final boolean isConnected;
    @NotNull
    private final String localAddress;
    private final int localPort;
    @NotNull
    private final String protocol;

    public ConnectionInfo(boolean z10, @NotNull String protocol, @NotNull String localAddress, int i10, Integer num, Integer num2) {
        Intrinsics.checkNotNullParameter(protocol, "protocol");
        Intrinsics.checkNotNullParameter(localAddress, "localAddress");
        this.isConnected = z10;
        this.protocol = protocol;
        this.localAddress = localAddress;
        this.localPort = i10;
        this.createConnectionTime = num;
        this.connectTime = num2;
    }

    public static /* synthetic */ ConnectionInfo copy$default(ConnectionInfo connectionInfo, boolean z10, String str, String str2, int i10, Integer num, Integer num2, int i11, Object obj) {
        if ((i11 & 1) != 0) {
            z10 = connectionInfo.isConnected;
        }
        if ((i11 & 2) != 0) {
            str = connectionInfo.protocol;
        }
        if ((i11 & 4) != 0) {
            str2 = connectionInfo.localAddress;
        }
        if ((i11 & 8) != 0) {
            i10 = connectionInfo.localPort;
        }
        if ((i11 & 16) != 0) {
            num = connectionInfo.createConnectionTime;
        }
        if ((i11 & 32) != 0) {
            num2 = connectionInfo.connectTime;
        }
        Integer num3 = num;
        Integer num4 = num2;
        return connectionInfo.copy(z10, str, str2, i10, num3, num4);
    }

    public final boolean component1() {
        return this.isConnected;
    }

    @NotNull
    public final String component2() {
        return this.protocol;
    }

    @NotNull
    public final String component3() {
        return this.localAddress;
    }

    public final int component4() {
        return this.localPort;
    }

    public final Integer component5() {
        return this.createConnectionTime;
    }

    public final Integer component6() {
        return this.connectTime;
    }

    @NotNull
    public final ConnectionInfo copy(boolean z10, @NotNull String protocol, @NotNull String localAddress, int i10, Integer num, Integer num2) {
        Intrinsics.checkNotNullParameter(protocol, "protocol");
        Intrinsics.checkNotNullParameter(localAddress, "localAddress");
        return new ConnectionInfo(z10, protocol, localAddress, i10, num, num2);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof ConnectionInfo) {
            ConnectionInfo connectionInfo = (ConnectionInfo) obj;
            return this.isConnected == connectionInfo.isConnected && Intrinsics.areEqual(this.protocol, connectionInfo.protocol) && Intrinsics.areEqual(this.localAddress, connectionInfo.localAddress) && this.localPort == connectionInfo.localPort && Intrinsics.areEqual(this.createConnectionTime, connectionInfo.createConnectionTime) && Intrinsics.areEqual(this.connectTime, connectionInfo.connectTime);
        }
        return false;
    }

    public final Integer getConnectTime() {
        return this.connectTime;
    }

    public final Integer getCreateConnectionTime() {
        return this.createConnectionTime;
    }

    @NotNull
    public final String getLocalAddress() {
        return this.localAddress;
    }

    public final int getLocalPort() {
        return this.localPort;
    }

    @NotNull
    public final String getProtocol() {
        return this.protocol;
    }

    public int hashCode() {
        int hashCode = ((((((Boolean.hashCode(this.isConnected) * 31) + this.protocol.hashCode()) * 31) + this.localAddress.hashCode()) * 31) + Integer.hashCode(this.localPort)) * 31;
        Integer num = this.createConnectionTime;
        int hashCode2 = (hashCode + (num == null ? 0 : num.hashCode())) * 31;
        Integer num2 = this.connectTime;
        return hashCode2 + (num2 != null ? num2.hashCode() : 0);
    }

    public final boolean isConnected() {
        return this.isConnected;
    }

    @NotNull
    public String toString() {
        boolean z10 = this.isConnected;
        String str = this.protocol;
        String str2 = this.localAddress;
        int i10 = this.localPort;
        Integer num = this.createConnectionTime;
        Integer num2 = this.connectTime;
        return "ConnectionInfo(isConnected=" + z10 + ", protocol=" + str + ", localAddress=" + str2 + ", localPort=" + i10 + ", createConnectionTime=" + num + ", connectTime=" + num2 + ")";
    }
}
