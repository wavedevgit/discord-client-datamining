package com.appsflyer.internal;

import androidx.recyclerview.widget.RecyclerView;
import java.io.BufferedInputStream;
import java.io.FilterInputStream;
import java.io.InputStream;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class AFk1qSDK extends FilterInputStream {
    private final int AFAdRevenueData;
    private int areAllFieldsValid;
    private short component1;
    private int component2;
    private byte[] component3;
    private long[] component4;
    private int equals;
    private final int getCurrencyIso4217Code;
    private int getMediationNetwork;
    private long[] getMonetizationNetwork;
    private final int getRevenue;

    public AFk1qSDK(InputStream inputStream, int i10, int i11, short s10, int i12, int i13) {
        this(inputStream, i10, i11, s10, i12, i13, (byte) 0);
    }

    private int getMediationNetwork() {
        int i10;
        if (this.component2 == Integer.MAX_VALUE) {
            this.component2 = ((FilterInputStream) this).in.read();
        }
        if (this.areAllFieldsValid == this.AFAdRevenueData) {
            byte[] bArr = this.component3;
            int i11 = this.component2;
            bArr[0] = (byte) i11;
            if (i11 >= 0) {
                int i12 = 1;
                do {
                    int read = ((FilterInputStream) this).in.read(this.component3, i12, this.AFAdRevenueData - i12);
                    if (read <= 0) {
                        break;
                    }
                    i12 += read;
                } while (i12 < this.AFAdRevenueData);
                if (i12 >= this.AFAdRevenueData) {
                    int i13 = this.getRevenue;
                    if (i13 == this.getCurrencyIso4217Code) {
                        getMonetizationNetwork();
                    } else {
                        if (this.getMediationNetwork <= i13) {
                            getMonetizationNetwork();
                        }
                        int i14 = this.getMediationNetwork;
                        if (i14 < this.getCurrencyIso4217Code) {
                            this.getMediationNetwork = i14 + 1;
                        } else {
                            this.getMediationNetwork = 1;
                        }
                    }
                    int read2 = ((FilterInputStream) this).in.read();
                    this.component2 = read2;
                    this.areAllFieldsValid = 0;
                    if (read2 < 0) {
                        int i15 = this.AFAdRevenueData;
                        i10 = i15 - (this.component3[i15 - 1] & 255);
                    } else {
                        i10 = this.AFAdRevenueData;
                    }
                    this.equals = i10;
                } else {
                    throw new IllegalStateException("unexpected block size");
                }
            } else {
                throw new IllegalStateException("unexpected block size");
            }
        }
        return this.equals;
    }

    private void getMonetizationNetwork() {
        long[] jArr = this.getMonetizationNetwork;
        long[] jArr2 = this.component4;
        short s10 = this.component1;
        long j10 = jArr2[(s10 + 2) % 4];
        int i10 = (s10 + 3) % 4;
        jArr2[i10] = ((jArr[i10] * 2147483085) + j10) / 2147483647L;
        jArr[i10] = ((jArr[s10 % 4] * 2147483085) + j10) % 2147483647L;
        for (int i11 = 0; i11 < this.AFAdRevenueData; i11++) {
            byte[] bArr = this.component3;
            bArr[i11] = (byte) (bArr[i11] ^ ((this.getMonetizationNetwork[this.component1] >> (i11 << 3)) & 255));
        }
        this.component1 = (short) ((this.component1 + 1) % 4);
    }

    @Override // java.io.FilterInputStream, java.io.InputStream
    public final int available() {
        getMediationNetwork();
        return this.equals - this.areAllFieldsValid;
    }

    @Override // java.io.FilterInputStream, java.io.InputStream
    public final boolean markSupported() {
        return false;
    }

    @Override // java.io.FilterInputStream, java.io.InputStream
    public final int read() {
        getMediationNetwork();
        int i10 = this.areAllFieldsValid;
        if (i10 >= this.equals) {
            return -1;
        }
        byte[] bArr = this.component3;
        this.areAllFieldsValid = i10 + 1;
        return bArr[i10] & 255;
    }

    @Override // java.io.FilterInputStream, java.io.InputStream
    public final long skip(long j10) {
        long j11 = 0;
        while (j11 < j10 && read() != -1) {
            j11++;
        }
        return j11;
    }

    private AFk1qSDK(InputStream inputStream, int i10, int i11, short s10, int i12, int i13, byte b10) {
        super(new BufferedInputStream(inputStream, RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT));
        this.getMediationNetwork = 1;
        this.component2 = Integer.MAX_VALUE;
        int min = Math.min(Math.max((int) s10, 4), 8);
        this.AFAdRevenueData = min;
        this.component3 = new byte[min];
        this.getMonetizationNetwork = new long[4];
        this.component4 = new long[4];
        this.areAllFieldsValid = min;
        this.equals = min;
        this.getMonetizationNetwork = AFk1rSDK.AFAdRevenueData(i10 ^ i13, min ^ i13);
        this.component4 = AFk1rSDK.AFAdRevenueData(i11 ^ i13, i12 ^ i13);
        this.getRevenue = 100;
        this.getCurrencyIso4217Code = 100;
    }

    @Override // java.io.FilterInputStream, java.io.InputStream
    public final int read(byte[] bArr, int i10, int i11) {
        int i12 = i10 + i11;
        for (int i13 = i10; i13 < i12; i13++) {
            getMediationNetwork();
            int i14 = this.areAllFieldsValid;
            if (i14 >= this.equals) {
                if (i13 == i10) {
                    return -1;
                }
                return i11 - (i12 - i13);
            }
            byte[] bArr2 = this.component3;
            this.areAllFieldsValid = i14 + 1;
            bArr[i13] = bArr2[i14];
        }
        return i11;
    }
}
